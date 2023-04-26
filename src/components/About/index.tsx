import React from "react";
import Icons from "./Icons";
import ReactJs from "../../../public/reactjs.png";
import ReactNative from "../../../public/reactnative.png";
import Tailwindcss from "../../../public/tailwindcss.png";
import Nextjs from "../../../public/next.svg";
import NodeJs from "../../../public/nodejs.png";
import Image from "next/image";
import Facec from "../../../public/facec.svg";
import Up from "../../../public/up.png";
import "animate.css";
// import { Container } from './styles';
interface Props {
  dark: boolean;
  setDark: (value: boolean) => void;
}
const About: React.FC<Props> = ({ dark, setDark }) => {
  return (
    <div
      className="flex flex-1 justify-center text-center ml-[10vw] mr-[10vw] pt-[12vw] reveal "
      id="about"
    >
      <div className="  ">
        <div className="text-black font-black text-5xl  " id="title">
          Sobre
        </div>
        <div
          className={` ${
            dark ? "text-gray-500" : "text-white"
          } flex flex-col text-gray-500 text-3xl mt-10 justify-center items-center`}
        >
          Formado em Análise e Desenvolvimento de Sistemas na Instituição
          <a href="https://umfg.edu.br/">
            <Image
              src={Facec}
              className="w-[12vw] mt-8 hover:scale-150 duration-700 "
              alt=""
            ></Image>
          </a>
        </div>
        <div
          className={`${
            dark ? "text-gray-500" : "text-white"
          } flex flex-col text-gray-500 text-3xl mt-10 justify-center items-center  `}
        >
          Sou Desenvolvedor Web e Mobile a 2 anos <br></br>Atualmente sou CEO e
          Desenvolvedor da
          <a href="">
            <Image
              src={Up}
              className={`w-[14vw] mt-8 hover:scale-150 duration-700 ${
                dark ? "invert grayscale" : "invert-0 grayscale-0 "
              }`}
              alt=""
            ></Image>
          </a>
        </div>
        <div
          className={` ${
            dark ? "text-gray-500" : "text-white"
          } flex flex-row  text-3xl mt-10 justify-center items-center `}
        >
          Estou disponível para qualquer projeto Web ou Mobile em que você
          desejar!
        </div>
        <div
          className={`${
            dark ? "text-black" : "text-white"
          } font-black text-3xl mt-10 `}
          id="title"
        >
          Minhas ferramentas de Desenvolvimento
        </div>
        <div className="flex flex-1 justify-center space-x-10 mt-10">
          <Icons
            src={ReactJs}
            href={""}
            atribute={undefined}
            dark={false}
          ></Icons>
          <Icons
            src={ReactNative}
            href={""}
            atribute={undefined}
            dark={false}
          ></Icons>
          <Icons
            src={Tailwindcss}
            href={""}
            atribute={undefined}
            dark={false}
          ></Icons>
          <Icons
            src={Nextjs}
            href={""}
            atribute={`${dark ? "invert-0" : "invert"}`}
            dark={false}
          ></Icons>
          <Icons
            src={NodeJs}
            href={""}
            atribute={undefined}
            dark={false}
          ></Icons>
        </div>
      </div>
    </div>
  );
};

export default About;
