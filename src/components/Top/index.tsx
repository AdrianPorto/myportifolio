import React, { use, useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import Link from "next/link";
// import { Container } from './styles';
interface Props {
  dark: boolean;
  setDark: (value: boolean) => void;
}

const Top: React.FC<Props> = ({ dark, setDark }) => {
  const toggleDark = () => {
    setDark(!dark);

    if (dark == false) {
      [localStorage.setItem("USER-THEME", "light")];
    } else {
      [localStorage.setItem("USER-THEME", "dark")];
    }
  };

  useEffect(() => {
    const DarkTheme = localStorage.getItem("USER-THEME");
    if (DarkTheme == "dark") {
      setDark(false);
    } else {
      setDark(true);
    }
  }, []);

  return (
    <div className="flex flex-row justify-around pl-10 pr-10 pt-5 animate__animated  animate__backInDown">
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
          <a href="#projects">Projetos</a>
        </div>
        <div
          className={`text-xl ml-5 mr-10 hover:scale-125 duration-500  ${
            dark ? "text-black " : ""
          }`}
        >
          <a href="#contact">Contato</a>
        </div>
        <div className="mr-[5vw]">
          <div
            className={`w-20 h-10 ${
              dark ? "bg-black  " : "bg-white"
            }  rounded-full cursor-pointer`}
            onClick={toggleDark}
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
        </div>

        <Link
          href={
            "https://api.whatsapp.com/send?phone=5544988609457&text=Ol%C3%A1%20,%20dei%20uma%20olhada%20no%20seu%20Portif%C3%B3lio%20e%20quero%20contratar%20seu%20servi%C3%A7o!"
          }
        >
          <button
            className={`${
              dark ? "bg-black" : "bg-white text-black"
            } w-40  rounded-full h-[50px] hover:scale-125
             hover:text-white duration-500 font-bold text-xl hover:bg-orange-500`}
          >
            Contrate-me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Top;
