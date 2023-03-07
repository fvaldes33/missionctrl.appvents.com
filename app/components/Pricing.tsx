import { IconCheck, IconBrandGooglePlay } from "@tabler/icons-react";
import { useState } from "react";
import appStoreWhite from "~/assets/app-store-white.svg";

const includedFeatures = [
  "Apps Platform",
  "Droplets",
  "Managed Databases",
  "Domains",
  "Billing",
  "Favorites",
];

export function Pricing() {
  const [plan, setPlan] = useState<string>("monthly");

  return (
    <div id="download" className="bg-primary-50 pt-12 pb-24 sm:pb-32 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-xl leading-8 text-slate-600">
            Everything is managed in the respective stores through In-App
            Purchases
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-primary-600 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              One Time Purchase
            </h3>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Enjoy all the features we offer for a simple one time price. No
              subscriptions, no hassle.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary-600">
                What's included
              </h4>
              <div className="h-px flex-auto bg-primary-600" />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <IconCheck
                    className="h-6 w-5 flex-none text-primary-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-slate-50 h-full py-10 text-center ring-1 ring-inset ring-slate-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                {/* <div className="flex items-center justify-center space-x-4">
                  <span className="capitalize text-slate-900">{plan}</span>
                  <label
                    htmlFor="AcceptConditions"
                    className="relative h-8 w-14 cursor-pointer flex justify-center"
                  >
                    <input
                      type="checkbox"
                      id="AcceptConditions"
                      className="peer sr-only"
                      checked={plan === "yearly"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setPlan("yearly");
                        } else {
                          setPlan("monthly");
                        }
                      }}
                    />

                    <span className="absolute inset-0 rounded-full transition bg-primary-600 peer-checked:bg-green-600"></span>

                    <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>
                  </label>
                </div> */}
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-slate-900">
                    {/* {plan === "monthly" ? "$1.99" : "$19.99"} */}
                    $4.99
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-slate-600">
                    USD
                  </span>
                </p>
                <p className="mt-6 text-xs leading-5 text-slate-600">
                  Invoices and receipts available through your app store.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-10 items-center justify-center">
          <a
            className="block w-36"
            href="https://apps.apple.com/us/app/mission-ctrl-for-digitalocean/id1671486255"
            target="_blank"
            rel="noreferrer"
          >
            <img src={appStoreWhite} alt="appstore button" className="w-full" />
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
    </div>
  );
}
