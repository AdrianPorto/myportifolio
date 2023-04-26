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
        <div className="mt-10 space-x-20 flex flex-row">
          <a href="">
            <BsWhatsapp
              size={100}
              className={` ${
                dark ? "fill-black" : " fill-white"
              } hover:fill-green-500 hover:scale-125 duration-500 fill-black`}
              id="icon"
            ></BsWhatsapp>
          </a>
          <a href="">
            <AiOutlineMail
              size={100}
              className={` ${
                dark ? "fill-black" : " fill-white"
              } hover:fill-orange-500 hover:scale-125 duration-500 fill-black `}
              id="icon"
            ></AiOutlineMail>
          </a>
          <a href="">
            <AiOutlineInstagram
              size={100}
              className={`${
                dark
                  ? "fill-black  hover:fill-[#d6249f]"
                  : "fill-white hover:fill-[#d6249f]"
              } hover:scale-125 duration-500  `}
              id="insta"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
