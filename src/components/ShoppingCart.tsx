import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import storeItems from "../data/storeItems.json";

import { formatCurrency } from "../utils/formatCurrency";
import { Transition } from "@headlessui/react";

type ShoppingCartProps = {
  isOpen: boolean;
};
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { decrementItemQuantity, closeCart, cartItems } =
    useContext(CartContext);
  let cartTotalPrice = 0;
  for (const cartItem of cartItems) {
    const item = storeItems.find((item) => item.id === cartItem.id);
    if (item) {
      cartTotalPrice += item.price * cartItem.quantity;
    }
  }
  return (
    <Transition
      show={isOpen}
      enter="transition-transform duration-200 ease-in-out"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-200 ease-in-out"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
      className="fixed right-0 top-0 z-[49] h-full w-full bg-white px-4 shadow min-[320px]:w-96"
    >
      {cartItems.map((item) => {
        if (item.quantity <= 0) return;

        const storeItem = storeItems.find(
          (storeItem) => storeItem.id === item.id
        );
        return (
          <>
            {storeItem != null && (
              <div className="first:mt-28" key={storeItem.id}>
                <hr className="h-0.5  bg-gray-700" />
                <div className="mb-5 flex">
                  <p className=" w-52">{storeItem.name}</p>
                  <p className="flex-1 ">({item.quantity})</p>
                  <p>{formatCurrency(item.quantity * storeItem.price)}</p>
                  {/* MINUS ICON  */}
                  <svg
                    onClick={() => decrementItemQuantity(storeItem.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" ml-1 h-5 w-5 translate-y-px cursor-pointer hover:opacity-80"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                </div>
              </div>
            )}
          </>
        );
      })}

      <hr className="mt-28 h-0.5 bg-gray-700" />
      <div className="flex justify-between">
        <p className="font-bold">Total</p>
        <p className="font-bold">{formatCurrency(cartTotalPrice)}</p>
      </div>

      {/* X ICON */}
      <svg
        onClick={closeCart}
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
    </Transition>
  );
}
