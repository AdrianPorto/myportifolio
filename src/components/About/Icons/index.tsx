import Image from "next/image";
import React from "react";

// import { Container } from './styles';
interface Props {
  src: any;
  href: string;
  atribute: any;
  dark: boolean;
}

const Icons: React.FC<Props> = ({ src, href, atribute, dark }) => {
  return (
    <div className="">
      <a
        href={href}
        className={`cursor-pointer border-[1px] rounded-full   hover:scale-125 duration-700 
  ${!dark ? "border-white shadow-sm" : " border-black   shadow-sm"}
        shadow-gray-400 w-[9vw] h-[9vw] flex flex-1 justify-center items-center`}
      >
        <Image
          src={src}
          alt=""
          className={`w-[5.2vw]  ${dark ? "invert-0" : `${atribute}`}`}
        ></Image>
      </a>
    </div>
  );
};

export default Icons;
