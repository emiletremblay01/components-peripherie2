import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { tw } from "../utils/utils";

const pages = [
  { name: "Boutique", path: "/boutique" },
  { name: "Éditions précédentes", path: "/editions-precedentes" },
  { name: "Édition actuelle", path: "/edition-actuelle" },
  { name: "À propos", path: "/a-propos" },
];

const itemsPanier = [
  { name: "Autocollants", price: 5, quantity: 1 },
  { name: "T-shirt", price: 25, quantity: 1 },
  { name: "Tote bag", price: 15, quantity: 1 },
  { name: "Tasse", price: 10, quantity: 3 },
];

export function Navbar() {
  const [isPanierOpen, setIsPanierOpen] = useState<boolean>(false);
  const togglePanier = () => setIsPanierOpen((isPanierOpen) => !isPanierOpen);
  return (
    <>
      <MobileMenu togglePanier={togglePanier} isPanierOpen={isPanierOpen} />
      <DesktopMenu togglePanier={togglePanier} isPanierOpen={isPanierOpen} />
    </>
  );
}

function MobileMenu({
  togglePanier,
  isPanierOpen,
}: {
  togglePanier: () => void;
  isPanierOpen: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);

  return (
    <header className="fixed z-50 flex w-full items-center justify-between px-4 pt-2 sm:hidden">
      <div className="overflow-clip">
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src="images/peripherie_logotype_noir.png"
            alt="logo"
            className=" w-28 -translate-x-2"
          />
        </NavLink>
      </div>
      <div className="flex items-center gap-5">
        <button className="hover:opacity-80" onClick={togglePanier}>
          Panier (1)
        </button>
        <button
          onClick={toggleMenu}
          className="group flex h-5 w-6 flex-col justify-between overflow-visible "
        >
          <div
            className={tw(
              "h-1 w-full origin-right bg-black transition-transform ease-in-out",
              { "-rotate-45 scale-95": isMenuOpen }
            )}
          ></div>
          <div
            className={tw(
              "h-1 w-full bg-black transition-transform ease-in-out",
              { "translate-x-16": isMenuOpen }
            )}
          ></div>

          <div
            className={tw(
              "h-1 w-full origin-right bg-black transition-transform ease-in-out",
              { "rotate-45 scale-95": isMenuOpen }
            )}
          ></div>
        </button>
      </div>
      {/* Panier */}
      <Transition
        show={isPanierOpen}
        enter="transition-transform duration-200 ease-in-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-200 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed right-0 top-0 -z-10 h-full w-full bg-white px-4 shadow min-[320px]:w-96"
      >
        {itemsPanier.map((item) => (
          <div className="first:mt-28">
            <hr className="h-0.5  bg-gray-700" />
            <div className="mb-5 flex">
              <p className=" w-52">{item.name}</p>
              <p className="flex-1 ">({item.quantity})</p>
              <p>{item.quantity * item.price}$</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" ml-1 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </div>
          </div>
        ))}
        <hr className="mt-28 h-0.5 bg-gray-700" />
        <div className="flex justify-between">
          <p className="font-bold">Total</p>
          <p className="font-bold">55$</p>
        </div>
      </Transition>
      {/* Menu */}
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

function DesktopMenu({
  togglePanier,
  isPanierOpen,
}: {
  togglePanier: () => void;
  isPanierOpen: boolean;
}) {
  return (
    <header className="hidden text-lg  sm:flex sm:px-4 sm:pb-16 sm:pt-6">
      <Transition
        show={isPanierOpen}
        enter="transition-transform duration-200 ease-in-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-200 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed right-0 top-0 z-50 h-full w-full bg-white px-4 shadow min-[320px]:w-96"
      >
        {itemsPanier.map((item) => (
          <div className="first:mt-28">
            <hr className="h-0.5  bg-gray-700" />
            <div className="mb-5 flex">
              <p className=" w-52">{item.name}</p>
              <p className="flex-1 ">({item.quantity})</p>
              <p>{item.quantity * item.price}$</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" ml-1 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </div>
          </div>
        ))}
        <svg
          onClick={togglePanier}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-0 top-0 m-4 h-6 w-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <hr className="mt-28 h-0.5 bg-gray-700" />
        <div className="flex justify-between">
          <p className="font-bold">Total</p>
          <p className="font-bold">55$</p>
        </div>
      </Transition>
      <header className="flex w-full  items-center justify-between gap-1 ">
        {/* Titles */}
        <div className=" my-1 flex shrink-0 items-center gap-6 pl-24">
          {pages.map((page) => (
            <NavLink to={page.path} className="group relative overflow-visible">
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
            onClick={togglePanier}
          >
            Panier (1)
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

// function Panier(isPanierOpen: any) {
//   return (

//   );
// }
