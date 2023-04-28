import React from "react";
import Icons from "./Icons";
import ReactJs from "../../../public/reactjs.png";
import ReactNative from "../../../public/reactnative.png";
import Tailwindcss from "../../../public/tailwindcss.png";
import Nextjs from "../../../public/next.svg";
import NodeJs from "../../../public/nodejs.png";
import Image from "next/image";
import Facec from "../../../public/facec.svg";
import TypeScript from "../../../public/typescript.png";
import Up from "../../../public/up.png";
import "animate.css";
import Link from "next/link";
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
          } flex flex-col text-gray-500 text-3xl mt-10 justify-center items-center max-[768px]:ml-[10vw] max-[768px]:mr-[10vw]`}
        >
          Formado em Análise e Desenvolvimento de Sistemas na Instituição
          <Link href={"https://umfg.edu.br/"}>
            <Image
              src={Facec}
              className="w-[12vw] mt-8 hover:scale-150 duration-700  max-[768px]:w-[60vw] "
              alt=""
            ></Image>
          </Link>
        </div>
        <div
          className={`${
            dark ? "text-gray-500" : "text-white"
          } flex flex-col text-gray-500 text-3xl mt-10 justify-center items-center  max-[768px]:ml-[10vw] max-[768px]:mr-[10vw] `}
        >
          Sou Desenvolvedor Web e Mobile a 2 anos <br></br>Atualmente sou CEO e
          Desenvolvedor da
          <Link href={"https://www.instagram.com/up_agencyofc/"}>
            <Image
              src={Up}
              className={`w-[14vw] mt-8 hover:scale-150 duration-700  max-[768px]:w-[80vw] ${
                dark ? "invert grayscale" : "invert-0 grayscale-0   "
              }`}
              alt=""
            ></Image>
          </Link>
        </div>
        <div
          className={` ${
            dark ? "text-gray-500" : "text-white"
          } flex flex-row  text-3xl mt-10 justify-center items-center max-[768px]:ml-[10vw] max-[768px]:mr-[10vw] `}
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
        <div className="flex flex-1 flex-row  max-[768px]:flex-col  justify-center space-x-10  max-[768px]:space-y-20  max-[768px]:space-x-0  mt-10">
          <div className=" flex flex-row space-x-10   max-[768px]:flex-row max-[768px]:flex  max-[768px]:space-x-10">
            <Icons
              src={ReactJs}
              href={"https://react.dev/"}
              atribute={undefined}
              dark={false}
            ></Icons>
            <Icons
              src={ReactNative}
              href={"https://reactnative.dev/"}
              atribute={undefined}
              dark={false}
            ></Icons>
          </div>
          <div className="flex flex-row  space-x-10  max-[768px]:flex-row  max-[768px]:flex max-[768px]:space-x-10">
            <Icons
              src={TypeScript}
              href={"https://www.typescriptlang.org/"}
              atribute={undefined}
              dark={false}
            ></Icons>
            <Icons
              src={Tailwindcss}
              href={"https://tailwindcss.com/"}
              atribute={undefined}
              dark={false}
            ></Icons>
          </div>
          <div className="flex flex-row space-x-10  max-[768px]:flex-rpw  max-[768px]:flex max-[768px]:space-x-10">
            <Icons 
              src={Nextjs}
              href={"https://nextjs.org/"}
              atribute={`${dark ? "invert-0" : "invert"}`}
              dark={false}
            ></Icons>
            <Icons
              src={NodeJs}
              href={"https://nodejs.org/pt-br"}
              atribute={undefined}
              dark={false}
            ></Icons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
