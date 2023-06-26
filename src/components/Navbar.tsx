import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { tw } from "../utils/tw";
import { CartContext } from "../context/CartContext";
import { v4 as uuidv4 } from "uuid";
const pages = [
  { id: uuidv4(), name: "Boutique", path: "/boutique" },
  { id: uuidv4(), name: "Éditions précédentes", path: "/editions-precedentes" },
  { id: uuidv4(), name: "Édition actuelle", path: "/edition-actuelle" },
  { id: uuidv4(), name: "À propos", path: "/a-propos" },
];

export function Navbar() {
  const { openCart, closeCart, getTotalItemsInCart } = useContext(CartContext);
  return (
    <>
      <MobileMenu {...{ openCart, closeCart, getTotalItemsInCart }} />
      <DesktopMenu {...{ openCart, getTotalItemsInCart }} />
    </>
  );
}

function MobileMenu({
  openCart,
  closeCart,
  getTotalItemsInCart,
}: {
  openCart: () => void;
  closeCart: () => void;
  getTotalItemsInCart: number;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);

  return (
    <>
      <header className="fixed z-50  flex w-full items-center justify-between bg-transparent px-4 pt-2 mix-blend-difference sm:hidden">
        <div className=" overflow-clip">
          <NavLink
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
              closeCart();
            }}
          >
            <img
              src="images/peripherie_logotype_noir.png"
              alt="logo"
              className=" w-28 -translate-x-2 invert"
            />
          </NavLink>
        </div>
        <div className="flex items-center gap-5 bg-transparent ">
          <button
            className="invert hover:opacity-80"
            onClick={() => {
              openCart();
              setIsMenuOpen(false);
            }}
          >
            {getTotalItemsInCart > 0 && (
              <span>Panier ({getTotalItemsInCart})</span>
            )}
          </button>
          <button
            onClick={() => {
              toggleMenu();
              closeCart();
            }}
            className="group  flex h-5 w-6 flex-col justify-between overflow-visible  "
          >
            <div
              className={tw(
                "h-1 w-full origin-right bg-white   transition-transform ease-in-out",
                { "-rotate-45 scale-95": isMenuOpen }
              )}
            ></div>
            <div
              className={tw(
                "h-1 w-full bg-white  transition-transform ease-in-out",
                { "translate-x-16": isMenuOpen }
              )}
            ></div>

            <div
              className={tw(
                "h-1 w-full origin-right bg-white  transition-transform ease-in-out",
                { "rotate-45 scale-95": isMenuOpen }
              )}
            ></div>
          </button>
        </div>
      </header>

      {/* Menu */}
      <Transition
        show={isMenuOpen}
        enter="transition-transform duration-200 ease-in-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-200 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed left-0 top-0 z-10 h-full w-full bg-white px-4"
      >
        {pages.map((page) => (
          <div className="first:mt-28" key={page.name}>
            <hr className="mb-1 h-0.5  bg-gray-700" />
            <p className="text-3xl font-bold ">
              <NavLink onClick={toggleMenu} to={page.path}>
                {page.name}
              </NavLink>
            </p>
          </div>
        ))}
      </Transition>
    </>
  );
}

function DesktopMenu({
  openCart,
  getTotalItemsInCart,
}: {
  openCart: () => void;
  getTotalItemsInCart: number;
}) {
  return (
    <header className="hidden text-lg  sm:flex sm:px-4 sm:pb-16 sm:pt-6">
      <header className="flex w-full  items-center justify-between gap-1 ">
        {/* Titles */}
        <div className=" my-1 flex shrink-0 items-center gap-6 pl-24">
          {pages.map((page) => (
            <NavLink
              key={page.id}
              to={page.path}
              className="group relative overflow-visible"
            >
              <p className="font-bold group-hover:opacity-0 ">{page.name}</p>
              <p className="absolute top-0.5 z-10 hidden min-w-max font-g2ciao text-base group-hover:block">
                {page.name}
              </p>
            </NavLink>
          ))}
        </div>
        <div className="flex flex-1 justify-end pr-4">
          <button
            className="z-40 min-w-max hover:opacity-80"
            onClick={openCart}
          >
            {getTotalItemsInCart > 0 && (
              <span>Panier ({getTotalItemsInCart})</span>
            )}
          </button>
        </div>
        <button className="group hidden rounded-full border border-black px-3 transition-opacity ease-in-out hover:bg-gray-600 hover:bg-opacity-5 active:bg-opacity-10 lg:block">
          <div className="relative inline-flex overflow-visible ">
            <p className="group-hover:opacity-0">Commander Peripherie </p>
            <p className="absolute top-0.5 z-10 hidden min-w-max font-g2ciao text-base group-hover:block">
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
