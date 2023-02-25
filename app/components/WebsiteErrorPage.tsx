import { Footer } from "./Footer";
import { Header } from "./Header";
import { Page } from "./Page";

interface WebsiteErrorPageProps {
  status: number;
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function WebsiteErrorPage({
  status,
  heading,
  text,
  children,
}: WebsiteErrorPageProps) {
  return (
    <>
      <div className="rounded-b-[5vw] bg-zinc-900 text-white relative z-10 pb-16">
        <Header />
        <Page>
          <section className="hero">
            <div className="container max-w-screen-xl flex flex-col items-start justify-center py-8 pb-24 md:py-24 lg:py-40">
              <p className="sr-only">{status}</p>
              <h1 className="text-6xl lg:text-9xl font-bold capitalize max-w-screen-lg leading-none mb-12">
                Looks like something went{" "}
                <span className="text-primary-600 bg-primary-200 rounded-md mt-1 px-2 inline-block whitespace-nowrap">
                  wrong
                </span>
              </h1>
              <p className="text-xl mb-12 max-w-screen-md">{text}</p>
              <a
                href="/"
                className="inline-block bg-primary-600 text-white h-14 px-6 rounded-md font-bold uppercase font-mono transition-all hover:bg-primary-800"
              >
                <div className="h-full flex items-center">Back Home</div>
              </a>
            </div>
          </section>
        </Page>
      </div>
      <Footer />
    </>
  );
}
