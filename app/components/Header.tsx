import { Link, NavLink } from "@remix-run/react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function Header() {
  const phLaunch = dayjs.tz("2023-03-03 12:01 AM", "America/Los_Angeles");
  const currTime = dayjs.tz(dayjs(), "America/Los_Angeles");

  const finalPath = phLaunch <= currTime ? "posts" : "products";

  return (
    <header className="fixed top-8 z-50 w-full px-4">
      <div className="flex justify-center">
        <div className="relative flex items-center justify-center rounded-2xl bg-zinc-800 backdrop-blur-md h-16 p-2 uppercase">
          <div className="h-full flex-none">
            <Link
              to="/"
              className="flex items-center justify-center rounded-xl font-bold text-xl h-full px-1 transition-all duration-150 hover:bg-zinc-700"
            >
              <img
                src="/assets/logo.png"
                className="h-full aspect-1 object-cover"
                alt=""
              />
            </Link>
          </div>
          <nav className="flex items-center space-x-6 mx-6">
            <NavLink
              to="/#download"
              className={({ isActive }) =>
                `text-sm tracking-wide transition-all duration-150 ${
                  isActive && "text-primary-600 font-bold"
                } hover:underline hover:text-primary-600`
              }
            >
              Download
            </NavLink>
          </nav>
          <div className="h-full flex-none">
            <Link
              to="/contact"
              className="flex items-center justify-center rounded-xl font-bold bg-primary-600 h-full px-4 transition-all duration-150 hover:bg-primary-800"
            >
              Contact
            </Link>
          </div>
          {phLaunch <= currTime && (
            <a
              href={`https://www.producthunt.com/${finalPath}/mission-control-for-digitalocean?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mission&#0045;control&#0045;for&#0045;digitalocean`}
              target="_blank"
              rel="noreferrer"
              className="absolute top-full transform translate-y-2 bg-[#ff6154] rounded-full px-4 py-2 text-sm text-white"
            >
              <p className="font-bold text-center">
                🎉 We're live on{" "}
                <span className="font-black">Product Hunt</span> 🎉
              </p>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
