import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";

const pages = [
  { name: "Boutique", path: "/boutique" },
  { name: "Éditions précédentes", path: "/editions-precedentes" },
  { name: "Édition actuelle", path: "/edition-actuelle" },
  { name: "À propos", path: "/a-propos" },
];

export function Navbar() {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  );
}

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  return (
    <header className="fixed z-50 flex w-full items-center justify-between px-4 pt-2 sm:hidden">
      <div className=" overflow-clip">
        <NavLink to="/">
          <img
            src="images/peripherie_logotype_noir.png"
            alt="logo"
            className=" w-28 -translate-x-2"
          />
        </NavLink>
      </div>
      <button
        onClick={toggleMenu}
        className="group flex h-5 w-6 flex-col justify-between overflow-visible "
      >
        <div
          className={`h-1 w-full origin-right bg-black transition-transform ease-in-out ${
            isMenuOpen && " -rotate-45  scale-95 "
          }`}
        ></div>
        <div
          className={`h-1 w-full bg-black transition-transform ease-in-out ${
            isMenuOpen && " translate-x-16 "
          }`}
        ></div>
        <div
          className={`h-1 w-full origin-right  bg-black transition-transform ease-in-out ${
            isMenuOpen && " rotate-45 scale-95"
          }`}
        ></div>
      </button>

      <Transition
        show={isMenuOpen}
        enter="transition-transform duration-200 ease-in-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-200 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed left-0 top-0 -z-10 h-full w-full bg-white px-4"
      >
        {pages.map((page) => (
          <div className="first:mt-28">
            <hr className="mb-1 h-0.5  bg-gray-700" />
            <p className="text-3xl font-bold ">
              <NavLink onClick={toggleMenu} to={page.path}>
                {page.name}
              </NavLink>
            </p>
          </div>
        ))}
      </Transition>
    </header>
  );
}

function DesktopMenu() {
  return (
    <header className="hidden text-lg  sm:flex sm:px-4 sm:pb-16 sm:pt-6">
      <header className="flex w-full  items-center justify-between gap-1 ">
        <div className="flex shrink-0 items-center gap-6 pl-24">
          {pages.map((page) => (
            <NavLink to={page.path} className="group relative overflow-visible">
              <p className="font-bold group-hover:opacity-0 ">{page.name}</p>
              <p className="absolute top-0.5 z-10 hidden min-w-max font-g2ciao text-base group-hover:block">
                {page.name}
              </p>
            </NavLink>
          ))}
        </div>

        <button className="group hidden rounded-full border border-black px-3 transition-opacity ease-in-out hover:bg-gray-600 hover:bg-opacity-5 active:bg-opacity-10 lg:block">
          <div className="relative inline-flex overflow-visible ">
            <p className="   group-hover:opacity-0">Commander Peripherie </p>
            <p className="  absolute top-0.5 z-10 hidden min-w-max font-g2ciao text-base group-hover:block">
              Commander Peripherie
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline h-5 w-5 -translate-y-px transition-transform ease-in-out group-hover:translate-x-1"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </header>
    </header>
  );
}
