import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
type ShopCardProps = {
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
};

// Main component
export function ShopCard({
  name,
  price,
  imageUrl,
  description,
}: ShopCardProps) {
  const [isOpened, setIsOpened] = useState(false);
  function toggleIsOpened() {
    setIsOpened((isOpened) => !isOpened);
  }

  return (
    <div className="w-full sm:max-w-lg">
      <h1 className="px-4 text-lg font-semibold sm:px-0">{name}</h1>
      <div className="group flex h-96 w-full flex-col border-b border-black bg-white sm:h-80 sm:border">
        <div className="group/image-container grow cursor-pointer overflow-clip border-b border-black">
          <img
            src={imageUrl}
            alt="photo"
            className="w-full transition duration-500 ease-in-out group-hover/image-container:scale-105"
          />
        </div>
        <div className="relative grid shrink-0 grid-cols-2 bg-white px-4 py-1.5 sm:py-0.5">
          <a onClick={toggleIsOpened}>
            <ButtonMoreInfos isOpened={isOpened} />
          </a>
          <button className="flex-auto text-left">Ajouter au panier</button>
        </div>

        <Infos description={description} price={price} isOpened={isOpened} />
      </div>
    </div>
  );
}

// Child components
function Infos({
  description,
  price,
  isOpened,
}: {
  description?: string;
  price: number;
  isOpened: boolean;
}) {
  return (
    <div
      className={`absolute -bottom-72 hidden h-full w-full bg-white px-3 py-4 transition duration-300 ease-in-out ${
        isOpened ? "-translate-y-72" : ""
      }`}
    >
      <p className="text-lg font-bold ">{price} $$</p>
      <p className=" min-w-fit">{description}</p>
    </div>
  );
}
function ButtonMoreInfos({ isOpened }: { isOpened: boolean }) {
  return (
    <button className="flex flex-auto items-center gap-2  ">
      Plus d'infos
      <FontAwesomeIcon
        icon={faArrowUp}
        className={`transition duration-300 ease-in-out ${
          isOpened ? " rotate-180" : ""
        }`}
      />
    </button>
  );
}
