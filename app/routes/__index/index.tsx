import { Page } from "~/components/Page";
import appStoreWhite from "~/assets/app-store-white.svg";
import rotatedLeft from "~/assets/misson-control/rotated-left.png";
import rotatedRight from "~/assets/misson-control/rotated-right.png";
import { Features } from "~/components/Features";
import { Pricing } from "~/components/Pricing";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Index() {
  const finalPath = "posts";
  return (
    <Page>
      <section className="">
        <div className="container max-w-screen-xl md:flex items-center relative py-32">
          <div className="w-full sm:w-2/3 md:w-1/2">
            <a
              href={`https://www.producthunt.com/${finalPath}/mission-control-for-digitalocean?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mission&#0045;control&#0045;for&#0045;digitalocean`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=381845&theme=light"
                alt="Mission&#0032;Control&#0032;for&#0032;DigitalOcean - Manage&#0032;your&#0032;DO&#0032;cloud&#0032;on&#0032;the&#0032;go | Product Hunt"
                style={{
                  width: "250px",
                  height: "54px",
                }}
                width="250"
                height="54"
              />
            </a>
            {/* <p className="uppercase tracking-wide text-lg font-semibold mb-12 font-mono">
              Mission Control
            </p> */}
            <h1 className="text-4xl sm:text-6xl font-bold mt-12 mb-8">
              Manage your DigitalOcean resources on the go.
            </h1>
            <p className="text-xl max-w-screen-md">
              The must-have mobile app to manage your DigitalOcean resources on
              the go.
            </p>
            <div className="flex mt-10 items-center">
              <a
                className="block w-36"
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

              <a
                className="block w-44"
                href="https://play.google.com/store/apps/details?id=com.appvents.domc"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  className="w-full"
                />
              </a>
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
