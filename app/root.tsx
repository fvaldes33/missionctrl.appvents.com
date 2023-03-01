import tailwindcss from "./styles/app.css";

import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { pageview } from "./utils/gtag.client";

export const meta: MetaFunction = ({ data }) => ({
  charset: "utf-8",
  title: "Mission Control for DigitalOcean",
  description:
    "Mission Control is the must-have iOS app for managing your DigitalOcean resources on the go.",
  viewport: "width=device-width,initial-scale=1",

  // og
  "og:title": "Mission Control for DigitalOcean",
  "og:description":
    "Mission Control is the must-have iOS app for managing your DigitalOcean resources on the go.",
  "og:image": `${data.baseUrl}/assets/open-graph.jpg`,
  "og:url": data.baseUrl,
  "og:type": "website",

  // twitter
  "twitter:card": "summary_large_image",
  "twitter:site": "@AppventsAgency",
  "twitter:creator": "@francoxavier33",
});

export function links() {
  return [
    { rel: "stylesheet", href: tailwindcss },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap",
    },
  ];
}

export function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  return json({
    env: {
      NODE_ENV: process.env.NODE_ENV,
      GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    },
    baseUrl: url.origin,
  });
}

export default function App() {
  const { env } = useLoaderData<typeof loader>();

  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname, env.GA_TRACKING_ID!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_TRACKING_ID}`}
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${env.GA_TRACKING_ID}', { page_path: window.location.pathname });`,
          }}
        />
      </head>
      <body className="min-h-full antialiased selection:bg-primary-600/25 font-sans">
        <Outlet />
        <Toaster position="top-right" />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
