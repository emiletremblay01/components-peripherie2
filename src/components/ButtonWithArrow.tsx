import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useState } from "react";
import { useTimeoutFn } from "react-use";

type ButtonProps = {
  text: string;
};

export function ButtonWithArrow({ text }: ButtonProps) {
  let [isStarting, setIsStarting] = useState(false);
  const timingOfTheAnimation = 100;
  let [, , resetIsShowing] = useTimeoutFn(
    () => setIsStarting(false),
    timingOfTheAnimation
  );

  const arrowClassNames = classnames(
    "transition",
    `duration-${timingOfTheAnimation}`,
    "ease-in-out",
    { "group-hover:translate-x-1": !isStarting },
    { "translate-x-2": isStarting }
  );
  return (
    <button
      onClick={() => {
        setIsStarting(true);
        resetIsShowing();
      }}
      className={`group flex w-full items-center justify-between gap-2 rounded-full border border-black px-3 py-0.5 transition hover:bg-gray-600 hover:bg-opacity-5 active:bg-opacity-10 sm:py-0 duration-${timingOfTheAnimation} ease-in-out`}
    >
      <div className="relative flex overflow-visible ">
        <p className="   group-hover:opacity-0">{text}</p>
        <p className="  absolute top-0.5 z-10 hidden min-w-max font-g2ciao text-sm group-hover:block">
          {text}
        </p>
      </div>

      <FontAwesomeIcon icon={faArrowRight} className={arrowClassNames} />
    </button>
  );
}
