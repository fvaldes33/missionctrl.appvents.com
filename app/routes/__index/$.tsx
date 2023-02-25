import { json } from "@remix-run/node";
import { Page } from "~/components/Page";

export function loaders() {
  return json(
    {},
    {
      status: 404,
    }
  );
}

export default function Splat() {
  return (
    <Page>
      <section className="hero">
        <div className="container max-w-screen-xl flex flex-col items-start justify-center py-8 pb-24 md:py-24 lg:py-40">
          <h1 className="text-6xl lg:text-9xl font-bold capitalize max-w-screen-lg leading-none mb-12">
            Looks like you are{" "}
            <span className="text-primary-600 bg-primary-200 rounded-md mt-1 px-2 inline-block whitespace-nowrap">
              lost
            </span>
          </h1>
          <p className="text-xl mb-12 max-w-screen-md">
            😭 Sorry you lost your way, click below to get back on track.
          </p>
          <a
            href="/"
            className="inline-block bg-primary-600 text-white h-14 px-6 rounded-md font-bold uppercase font-mono transition-all hover:bg-primary-800"
          >
            <div className="h-full flex items-center">Back Home</div>
          </a>
        </div>
      </section>
    </Page>
  );
}
