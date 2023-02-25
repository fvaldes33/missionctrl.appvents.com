import { useForm, zodResolver } from "@mantine/form";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { IconLoader } from "@tabler/icons-react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { Page } from "~/components/Page";
import { classNames } from "~/utils/classNames";
import { commitSession, getSession } from "~/utils/session.server";
import { sendNotification } from "~/utils/slack.server";

const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email(),
  message: z.string().min(100, "Message is required"),
});

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request);
  return json(
    {
      success: session.get("success-message") ?? undefined,
      error: session.get("error-message") ?? undefined,
    },
    {
      headers: {
        "Set-cookie": await commitSession(session),
      },
    }
  );
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const formDataObj = {
    ...Object.fromEntries(formData),
    services: formData.getAll("services"),
  };

  const session = await getSession(request);

  const validation = ContactFormSchema.safeParse(formDataObj);
  if (!validation.success) {
    session.flash("error-message", "Missing required fields");
    return json(
      {
        success: true,
        error: validation.error.format(),
      },
      {
        status: 500,
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
    );
  }

  try {
    const message = Object.keys(validation.data).map(
      (key) => `${key}: ${validation.data[key as keyof typeof validation.data]}`
    );

    await sendNotification({
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "New Submission from [DOMC]",
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message.join("\n"),
          },
        },
      ],
    });
  } catch (e) {
    console.log(e);
  }

  session.flash("success-message", "Thank you for your submission");

  return json(
    {
      success: true,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export default function ChatPage() {
  const { error, success } = useLoaderData<typeof loader>();
  const transition = useTransition();

  const { getInputProps, onSubmit, reset, ...form } = useForm<
    z.infer<typeof ContactFormSchema>
  >({
    validate: zodResolver(ContactFormSchema),
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (success) {
      reset();
    }
  }, [reset, success]);

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    if (error) {
      toast.error(error);
    }
  }, [error, success]);

  return (
    <Page>
      <section className="hero mt-32">
        <div className="container max-w-screen-xl flex items-center justify-center py-8 pb-24 md:py-24 lg:py-40">
          <h1 className="text-6xl lg:text-9xl font-bold capitalize max-w-screen-lg leading-none text-center">
            Let's have a little{" "}
            <span className="text-primary-600 bg-primary-200 rounded-md mt-1 px-2 inline-block whitespace-nowrap">
              chat
            </span>
          </h1>
        </div>
      </section>
      <section className="pb-24">
        <Form method="post" className="container max-w-screen-lg">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="flex flex-col relative border-2 border-zinc-600 hover:border-primary-600 focus-within:border-primary-600 rounded-2xl p-4">
              <label className="block font-mono">First Name</label>
              <input
                type="text"
                name="firstName"
                className="border-none text-primary-200 bg-transparent focus:border-none focus:outline-none focus:ring-0 pt-3 pb-0 px-0"
                placeholder="e.g. John"
                {...getInputProps("firstName")}
              />
            </div>
            <div className="flex flex-col relative border-2 border-zinc-600 hover:border-primary-600 focus-within:border-primary-600 rounded-2xl p-4">
              <label className="block font-mono">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="border-none text-primary-200 bg-transparent focus:border-none focus:outline-none focus:ring-0 pt-3 pb-0 px-0"
                placeholder="e.g. Smith"
                {...getInputProps("lastName")}
              />
            </div>
            <div className="md:col-span-2 flex flex-col relative border-2 border-zinc-600 hover:border-primary-600 focus-within:border-primary-600 rounded-2xl p-4">
              <label className="block font-mono">Email</label>
              <input
                type="email"
                name="email"
                className="border-none text-primary-200 bg-transparent focus:border-none focus:outline-none focus:ring-0 pt-3 pb-0 px-0"
                placeholder="e.g. jsmith@acme.co"
                {...getInputProps("email")}
              />
            </div>
          </div>

          <div className="grid gap-4 md:gap-8 mt-4 md:mt-8">
            <div className="flex flex-col relative border-2 border-zinc-600 hover:border-primary-600 focus-within:border-primary-600 rounded-2xl p-4">
              <label className="block font-mono">Message</label>
              <textarea
                name="message"
                className="border-none text-primary-200 bg-transparent focus:border-none focus:outline-none focus:ring-0 pt-3 pb-0 px-0"
                placeholder="What do you want to talk about?"
                rows={5}
                {...getInputProps("message")}
              ></textarea>
              <span
                className={classNames(
                  "absolute top-4 right-4 text-sm",
                  form.isValid("message") ? "text-primary-600" : "text-red-600"
                )}
              >
                {form.values.message.length} / 100
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-8">
            <button
              type="submit"
              className="inline-block bg-primary-600 text-white h-14 px-6 rounded-md font-bold uppercase font-mono transition-all hover:bg-primary-800"
            >
              {transition.state === "submitting" ? (
                <IconLoader className="animate-spin" />
              ) : (
                `Submit`
              )}
            </button>
          </div>
        </Form>
      </section>
    </Page>
  );
}
