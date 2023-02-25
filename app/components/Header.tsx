import { Link, NavLink } from "@remix-run/react";

export function Header() {
  return (
    <header className="fixed top-8 z-50 w-full px-4">
      <div className="flex justify-center">
        <div className="flex items-center justify-center rounded-2xl bg-zinc-800 backdrop-blur-md h-16 p-2 uppercase">
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
            {/* <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm tracking-wide transition-all duration-150 ${
                isActive && "text-primary-600 font-bold"
              } hover:underline hover:text-primary-600`
            }
          >
            About
          </NavLink> */}
          </nav>
          <div className="h-full flex-none">
            <Link
              to="/contact"
              className="flex items-center justify-center rounded-xl font-bold bg-primary-600 h-full px-4 transition-all duration-150 hover:bg-primary-800"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
