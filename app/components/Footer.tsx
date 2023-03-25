import { Link } from "@remix-run/react";
import { IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="">
      <div className="h-[500px] lg:h-[700px] pointer-events-none"></div>

      <div className="fixed py-8 md:py-12 lg:py-24 inset-x-0 top-auto bottom-0 bg-white z-0">
        <div className="container flex items-center">
          <div className="max-w-screen-md">
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold capitalize max-w-screen-lg leading-none mb-10">
              Built by{" "}
              <span className="text-primary-600 bg-zinc-200 rounded-md mt-1 px-2 inline-block whitespace-nowrap">
                Appvents
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-2xl mb-8">
              We are always ready to tackle the next project. Feel free to
              contact us through our website, on twitter, or any of our other
              socials. Just want to to say, thats ok too.
            </p>

            <div className="flex items-center">
              <Link
                to="/contact"
                className="inline-block bg-primary-600 text-white h-14 px-6 rounded-md font-bold uppercase font-mono transition-all hover:bg-primary-800"
              >
                <div className="h-full flex items-center">Contact</div>
              </Link>

              <div className="ml-4 flex items-center space-x-4">
                <Link
                  to="/privacy"
                  className="p-3 flex items-center justify-center hover:text-primary-600 transition-colors duration-75 rounded-full"
                >
                  Privacy Policy
                </Link>
                <a
                  href="https://twitter.com/AppventsAgency"
                  title="twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-75 rounded-full"
                >
                  <IconBrandTwitter size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/frvaldes"
                  title="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-75 rounded-full"
                >
                  <IconBrandLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex items-center text-sm mt-8">
          Copyright &copy; 2023 Appvents LLC.
        </div>
      </div>

      <img
        src="/assets/flat-logo-dark.png"
        className="fixed right-0 bottom-0 opacity-75 xl:opacity-100"
        alt=""
      />
    </footer>
  );
}
