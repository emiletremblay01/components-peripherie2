import { useState } from "react";
import { ButtonWithArrow } from "./ButtonWithArrow";
import { NavLink } from "react-router-dom";

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
      {isMenuOpen && (
        <div className="fixed left-0 top-0 -z-10 h-full w-full bg-white px-4">
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
        </div>
      )}
    </header>
  );
}

function DesktopMenu() {
  return (
    <header className="hidden  sm:flex sm:px-4 sm:pb-16 sm:pt-6">
      <header className="flex w-full  items-center justify-between gap-1 ">
        <div className="flex shrink-0 items-center gap-4 pl-24">
          {pages.map((page) => (
            <NavLink to={page.path} className="group relative overflow-visible">
              <p className="font-bold group-hover:opacity-0 ">{page.name}</p>
              <p className="absolute top-0.5 z-10 hidden min-w-max font-g2ciao text-sm group-hover:block">
                {page.name}
              </p>
            </NavLink>
          ))}
        </div>

        <div className="hidden shrink-0 rounded-full  bg-white md:block">
          <a href="" className="">
            <ButtonWithArrow text="Commander Peripherie" />
          </a>
        </div>
      </header>
    </header>
  );
}
