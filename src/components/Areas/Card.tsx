"use client";
import { BsArrowRight } from "react-icons/bs";
import { IconBaseProps } from "react-icons";
import { useState } from "react";
import { Transition } from "react-transition-group";

type ButtonIconProps = {
  title: string;
  icon: IconBaseProps;
  content: string;
};

function Cards({ title, icon, content }: ButtonIconProps) {
  const [isModalOpen, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <div className="w-[320px] mx-4 h-60 shadow-[0_2px_8px_0_rgba(19,19,20,0.28)] flex flex-col justify-center items-center gap-2.5 px-[60px] py-[30px] hover:scale-105 hover:transition-all duration-500 ">
        <>{icon}</>
        <h2 className="text-lg text-center uppercase font-bold">{title}</h2>
        <button
          onClick={() => setOpenModal(!isModalOpen)}
          className="flex items-center gap-2 text-primary text hover:font-semibold"
        >
          Ler mais <BsArrowRight />
        </button>
      </div>

      <Transition in={isModalOpen} timeout={300} unmountOnExit>
        {(state) => (
          <div
            className={`z-30 bg-black bg-opacity-50 fixed flex justify-center items-center left-0 top-0 bottom-0 right-0 p-6 transition-opacity duration-500 ${
              state === "entering" || state === "entered" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-black w-[800px] min-h-[400px] gap-2 bg-white opacity-100 rounded-lg p-6 flex flex-col justify-between items-center">
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-xl lg:text-2xl uppercase font-bold text-center">{title}</h2>
                <p className="text-base lg:text-xl text-justify">{content}</p>
              </div>
              <button
                onClick={() => setOpenModal(!isModalOpen)}
                className="text-xl uppercase font-bold text-primary"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}

export default Cards;
