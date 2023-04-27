import React, { use, useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import burguer from "../../../../public/menu.png";
import close from "../../../../public/close.png";
import Link from "next/link";
import Menu from "./Menu";
// import { Container } from './styles';
interface Props {
  dark: boolean;
  setDark: (value: boolean) => void;
}

const TopMobile: React.FC<Props> = ({ dark, setDark }) => {
  const [active, setActive] = useState(false);
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
      className="pl-10 pr-10  pb-5  w-screen flex flex-row  border-b-[1px] border-gray-300 shadow-sm    
      "
    >
      <div className="flex flex-col pt-5">
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
      {!active ? (
        <div className="mt-10 flex absolute right-10 z-20  ">
          <div
            className="w-10"
            onClick={() => {
              setActive(!active);
            }}
          >
            <Image
              src={burguer}
              alt={""}
              className={`${dark ? "invert-0" : "invert"}`}
            ></Image>
          </div>
        </div>
      ) : (
        <div className="mt-10 flex absolute right-10 z-40 animate__rotateIn animate__animated animate__delay-0.1s	0.1s">
          <div
            className="w-10"
            onClick={() => {
              setActive(!active);
            }}
          >
            <Image
              src={close}
              alt={""}
              className={`${dark ? "invert-0" : "invert"}`}
            ></Image>
          </div>
        </div>
      )}

      {active && (
        <Menu
          active={active}
          setActive={setActive}
          dark={dark}
          setDark={setDark}
        ></Menu>
      )}
    </div>
  );
};

export default TopMobile;
