import { Outlet, useCatch } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { WebsiteErrorPage } from "~/components/WebsiteErrorPage";

export default function IndexLayout() {
  return (
    <>
      <div className="rounded-b-[5vw] bg-primary-900 text-primary-50 relative z-10 mb-16 overflow-hidden">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <WebsiteErrorPage
      heading={"Whoops!<br/>Page Not Found"}
      status={caught.status}
    />
  );
}

export function ErrorBoundary({ error }: { error: any }) {
  return (
    <WebsiteErrorPage
      heading={"😱 Whoops, that's no bueno."}
      text={error.message}
      status={500}
    >
      <pre className="hidden">{error.stack}</pre>
    </WebsiteErrorPage>
  );
}
