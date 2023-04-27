import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

// import { Container } from './styles';
interface Props {
  dark: boolean;
  setDark: (value: boolean) => void;
}
const Contact: React.FC<Props> = ({ dark, setDark }) => {
  return (
    <div
      className="flex flex-1 justify-center text-center ml-[30vw] mr-[30vw] mt-40 mb-10   reveal2"
      id="contact"
    >
      <div className="">
        <div className="text-black font-black text-5xl  " id="title">
          Contato
        </div>
        <div className="mt-10 space-x-20 flex flex-row max-[768px]:space-x-[10vw]">
          <Link
            href={
              "https://api.whatsapp.com/send?phone=5544988609457&text=Ol%C3%A1%20,%20dei%20uma%20olhada%20no%20seu%20Portif%C3%B3lio%20e%20quero%20contratar%20seu%20servi%C3%A7o!"
            }
          >
            <BsWhatsapp
              size={100}
              className={` ${
                dark ? "fill-black" : " fill-white"
              } hover:fill-green-500 hover:scale-125 max-[768px]:w-[13vw]  duration-500 fill-black`}
              id="icon"
            ></BsWhatsapp>
          </Link>

          <Link href={"mailto:gustosts@gmail.com"}>
            <AiOutlineMail
              size={100}
              className={` ${
                dark ? "fill-black" : " fill-white"
              } hover:fill-orange-500 hover:scale-125 max-[768px]:w-[13vw]  duration-500 fill-black `}
              id="icon"
            ></AiOutlineMail>
          </Link>

          <Link href={"https://www.instagram.com/adrianp0rto/"}>
            <AiOutlineInstagram
              size={100}
              className={`${
                dark
                  ? "fill-black  hover:fill-[#d6249f]"
                  : "fill-white hover:fill-[#d6249f]"
              } hover:scale-125 duration-500 max-[768px]:w-[13vw]  `}
              id="insta"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
