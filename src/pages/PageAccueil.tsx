import { ButtonWithArrow } from "../components/ButtonWithArrow";

export function PageAccueil() {
  return (
    <div className="flex flex-1 flex-col items-stretch sm:px-4 xl:mx-auto xl:w-full xl:max-w-7xl">
      <div className=" relative z-0 h-[26rem] w-full overflow-hidden ">
        <img
          src="https://picsum.photos/100/300"
          alt=""
          className=" w-full object-cover "
        />{" "}
        <p className=" absolute bottom-0 left-0 w-44 pb-2  pl-4 leading-5 text-white sm:top-0 sm:pt-3">
          Le mag des nouvelles marges{" "}
          <span className=" font-g2ciao">créatives</span>
        </p>
      </div>
      <div className="flex flex-col px-4 sm:flex-row sm:gap-2 sm:px-0">
        <p className="mt-3 text-xl  leading-6  sm:max-w-3xl sm:px-0 sm:text-base sm:leading-5">
          Périphérie est une publication imprimée qui sonde les marges des
          mondes créatifs via des portraits subjectifs, des narrations
          immersives et des entrevues intimistes. Notre terrain de jeu?
          L'émergence, l'ombre, l'alternatif.
        </p>
        <a
          href="/a-propos"
          className=" mt-3 h-fit w-full min-w-fit grow-0 rounded-full sm:max-w-xs"
        >
          <ButtonWithArrow text="À PROPOS" />
        </a>
      </div>
      <hr className=" mx-4 mb-20 mt-9 h-px border-0 bg-gray-700 sm:mx-0" />
      <div className="flex flex-col md:flex-row md:gap-4 ">
        <div className="flex flex-col md:flex-auto">
          <div className="relative z-0 h-96 w-full overflow-hidden md:aspect-video md:h-auto">
            <img
              src="https://picsum.photos/100/300"
              alt=""
              className=" w-full object-cover "
            />
            <p className=" absolute bottom-0 left-0 w-44 pb-2  pl-4 leading-5 text-white sm:top-0 sm:pt-3">
              Périphérie #2 <br /> Créer dans les espaces seconds
            </p>
          </div>
          <a
            href=""
            className="mx-4 mb-16 mt-3 rounded-full sm:mx-0 sm:max-w-sm"
          >
            <ButtonWithArrow text="COMMANDER" />
          </a>
        </div>
        <div className="flex flex-col md:flex-auto">
          <div className="relative z-0 h-96  w-full overflow-hidden md:aspect-video md:h-auto">
            <img
              src="https://picsum.photos/100/300"
              alt=""
              className=" w-full object-cover "
            />
            <p className=" absolute bottom-0 left-0 w-44 pb-2  pl-4 leading-5 text-white sm:top-0 sm:pt-3">
              Périphérie #1 <br /> La filiation dans la création
            </p>
          </div>
          <a
            href=""
            className="mx-4 my-3 mb-16 rounded-full sm:mx-0 sm:max-w-sm"
          >
            <ButtonWithArrow text="COMMANDER" />
          </a>
        </div>
      </div>
    </div>
  );
}
