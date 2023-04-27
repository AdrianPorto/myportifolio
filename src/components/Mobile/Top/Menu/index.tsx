import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
// import { Container } from './styles';

interface Props {
  setActive: (value: boolean) => void;
  active: boolean;
  dark: boolean;
  setDark: (value: boolean) => void;
}

const Menu: React.FC<Props> = ({ dark, setDark, active, setActive }) => {
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
    <div
      className={`w-52 h-screen    ${
        dark ? "bg-white" : "bg-black backdrop-blur-3xl bg-opacity-[98%]"
      } right-0 fixed  border-l-[1px]  shadow-lg animate__fadeInRight animate__animated `}
    >
      <div className={`flex flex-1 flex-col   mt-36   ml-4 text-lg `}>
        <div
          className={`mr-10  duration-500 ${
            dark ? "text-black" : "text-white"
          }  `}
        >
          <Link
            href={"#aboutM"}
            onClick={() => {
              setActive(false);
            }}
          >
            Sobre
          </Link>
        </div>
        <div
          className={`mr-10 mt-5 duration-500 text-black  ${
            dark ? "text-black" : "text-white"
          }`}
        >
          <Link
            href="#projects"
            onClick={() => {
              setActive(false);
            }}
          >
            Projetos
          </Link>
        </div>
        <div
          className={`mr-10   mt-5  duration-500 text-black  ${
            dark ? "text-black" : "text-white"
          } `}
        >
          <Link
            href="#contact"
            onClick={() => {
              setActive(false);
            }}
          >
            Contato
          </Link>
        </div>

        <Link
          href={
            "https://api.whatsapp.com/send?phone=5544988609457&text=Ol%C3%A1%20,%20dei%20uma%20olhada%20no%20seu%20Portif%C3%B3lio%20e%20quero%20contratar%20seu%20servi%C3%A7o!"
          }
        >
          <button
            className={`${
              dark ? "bg-black" : "bg-white text-black"
            } flex flex-1 rounded-full h-[50px] w-[175px] justify-center items-center
             hover:scale-125 mt-10 hover:text-white duration-500 font-bold text-2xl hover:bg-orange-500`}
          >
            Contrate-me
          </button>
        </Link>
        <div
          className={`w-20 h-10 mt-10 ml-[5vw]  ${
            dark ? "bg-black  " : "bg-white"
          } mr-10 rounded-full cursor-pointer`}
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
    </div>
  );
};

export default Menu;
