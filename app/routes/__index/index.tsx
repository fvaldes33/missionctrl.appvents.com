import { Page } from "~/components/Page";
import appStoreWhite from "~/assets/app-store-white.svg";
import { IconBrandGooglePlay } from "@tabler/icons-react";
import rotatedLeft from "~/assets/misson-control/rotated-left.png";
import rotatedRight from "~/assets/misson-control/rotated-right.png";
import { Features } from "~/components/Features";
import { Pricing } from "~/components/Pricing";

export default function Index() {
  return (
    <Page>
      <section className="">
        <div className="container max-w-screen-xl md:flex items-center relative py-32">
          <div className="w-full sm:w-2/3 md:w-1/2">
            <p className="uppercase tracking-wide text-lg font-semibold mb-12 font-mono">
              Mission Control
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
              Manage your DigitalOcean resources on the go.
            </h1>
            <p className="text-xl max-w-screen-md">
              The must-have mobile app to manage your DigitalOcean resources on
              the go.
            </p>
            <div className="flex mt-10 items-center">
              <a
                className="block w-44"
                href="https://apps.apple.com/us/app/mission-ctrl-for-digitalocean/id1671486255"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={appStoreWhite}
                  alt="appstore button"
                  className="w-full"
                />
              </a>

              <div className="w-44 h-12 px-4 flex items-center">
                <IconBrandGooglePlay strokeWidth={1} />
                <div className="ml-2">
                  <p className="font-bold">Google Play</p>
                  <p className="text-xs">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/2 flex-none grid mt-10 md:mt-0 relative">
            <img
              src={rotatedLeft}
              alt=""
              className="transform -translate-x-1/4"
            />
            <img
              src={rotatedRight}
              alt=""
              className="absolute inset-y-0 right-0 transform translate-x-1/4 translate-y-1/3"
            />
          </div>
        </div>
      </section>

      <Features />
      <Pricing />
    </Page>
  );
}
