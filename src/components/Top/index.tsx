import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
// import { Container } from './styles';
interface Props {
  dark: boolean;
  setDark: (value: boolean) => void;
}
const Top: React.FC<Props> = ({ dark, setDark }) => {
  return (
    <div className="pl-10 pr-10 flex flex-row justify-between pt-5 animate__animated  animate__backInDown">
      <div className="flex flex-col">
        <div className={`text-3xl   font-bold `} id="profissao">
          Adrian
        </div>
        <div
          className={`text-3xl  ${dark ? "text-black " : ""} 
         `}
        >
          Porto
        </div>
      </div>

      <div className="flex w-[50vw]  justify-center items-center">
        <div
          className={`text-xl ml-5 hover:scale-125 duration-500  ${
            dark ? "text-black " : ""
          }`}
        >
          <a href="#about">Sobre</a>
        </div>
        <div
          className={`text-xl ml-5 hover:scale-125  duration-500  ${
            dark ? "text-black " : ""
          }`}
        >
          <a href="">Projetos</a>
        </div>
        <div
          className={`text-xl ml-5 mr-10 hover:scale-125 duration-500  ${
            dark ? "text-black " : ""
          }`}
        >
          <a href="">Contato</a>
        </div>

        <div
          className={`w-20 h-10 ${
            dark ? "bg-black  " : "bg-white"
          } mr-10 rounded-full cursor-pointer`}
          onClick={() => {
            if (dark != true) {
              setDark(true);
            } else {
              setDark(false);
            }
          }}
        >
          <div
            className={`w-12 h-10 bg-gray-800  scale-105 rounded-full flex justify-center items-center duration-200 opacity-100 ${
              dark ? "translate-x-8 opacity-0" : ""
            } `}
          >
            {dark && <BsFillSunFill className="scale-125 " />}

            {!dark && <BsFillMoonFill className=" scale-125" />}
          </div>
        </div>

        <button
          className={`${
            dark ? "bg-black" : "bg-white text-black"
          } w-[12vw] rounded-full h-[50px] hover:scale-125 hover:text-white duration-500 font-bold text-xl hover:bg-orange-500`}
        >
          Contrate-me
        </button>
      </div>
    </div>
  );
};

export default Top;
