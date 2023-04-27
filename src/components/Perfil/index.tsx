import Image from "next/image";
import React from "react";
import Me from "../../../public/me.png";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
// import { Container } from './styles';
interface Props {
  dark: boolean;
  setDark: (value: boolean) => void;
}
const Perfil: React.FC<Props> = ({ dark, setDark }) => {
  return (
    <div
      className={`flex w-screen h-[12vw] mt-[16vw] mb-[3vw]  justify-center max-[768px]:mt-[500px] max-[768px]:mb-[300px]  `}
    >
      <div className="flex flex-row justify-center items-center max-[768px]:flex max-[768px]:flex-col ">
        <div className="animate__animated animate__backInLeft max-[768px]:mb-12  ">
          <Image
            className="w-[22vw] h-[22vw] rounded-full max-[768px]:w-[50vw] max-[768px]:h-[50vw]"
            src={Me}
            alt=""
          ></Image>
        </div>
        <div className="text-gray-400 text-xl ml-12  max-[768px]:justify-center  max-[768px]:ml-[10vw] max-[768px]:mr-[10vw] font-black flex flex-col  max-[768px]:text-2xl  max-[768px]:space-y-4">
          <div>Olá , meu nome é</div>
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
          <div className="flex flex-1 justify-center items-center mt-10 max-[768px]:pt-14">
            <Link href={"https://github.com/AdrianPorto"}>
              <AiFillGithub
                size={45}
                className="mr-7 hover:fill-orange-500 hover:scale-125 duration-500  max-[768px]:w-[16vw]  max-[768px]:h-[16vw]"
              />
            </Link>

            <Link href={"https://www.instagram.com/adrianp0rto/"}>
              <AiFillInstagram
                size={45}
                className="mr-7 hover:fill-orange-500 hover:scale-125 duration-500 max-[768px]:w-[16vw]  max-[768px]:h-[16vw]"
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/adrianporto/"}>
              <BsLinkedin
                size={45}
                className="mr-7 hover:fill-orange-500 hover:scale-125 duration-500 max-[768px]:w-[16vw]  max-[768px]:h-[16vw]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
