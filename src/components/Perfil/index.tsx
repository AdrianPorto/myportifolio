import Image from "next/image";
import React from "react";
import Me from "../../../public/me.png";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
// import { Container } from './styles';
interface Props {
  dark: boolean;
  setDark: (value: boolean) => void;
}
const Perfil: React.FC<Props> = ({ dark, setDark }) => {
  return (
    <div
      className={`flex w-screen h-[12vw] mt-[16vw] mb-[20vw]  justify-center `}
    >
      <div className="flex flex-row justify-center items-center ">
        <div className="animate__animated animate__backInLeft">
          <Image
            className="w-[22vw] h-[22vw] rounded-full"
            src={Me}
            alt=""
          ></Image>
        </div>
        <div className="text-gray-400 text-xl ml-12 font-black flex flex-col ">
          Olá , meu nome é
          <div
            className={` ${
              dark ? "text-black nomeB " : "nome"
            } text-6xl font-black `}
          >
            Adrian Porto
          </div>
          <div className="">
            {" "}
            E sou um{" "}
            <span id="profissao">
              {" "}
              Desenvolvedor{" "}
              <TypeAnimation
                sequence={["Web", 3000, "Mobile", 3000]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          <div className="flex flex-1 justify-center items-center mt-10">
            <a href="">
              <AiFillGithub
                size={45}
                className="mr-7 hover:fill-orange-500 hover:scale-125 duration-500"
              />
            </a>
            <a href="">
              <AiFillInstagram
                size={45}
                className="mr-7 hover:fill-orange-500 hover:scale-125 duration-500"
              />
            </a>
            <a href="">
              <BsLinkedin
                size={45}
                className="mr-7 hover:fill-orange-500 hover:scale-125 duration-500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
