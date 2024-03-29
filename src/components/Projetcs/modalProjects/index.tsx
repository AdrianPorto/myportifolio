import Image from "next/image";
import Link from "next/link";
import React from "react";

// import { Container } from './styles';
interface Props {
  src: any;
  href: string;
  Title: any;
  Description: any;
  dark: boolean;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
}

const Modal: React.FC<Props> = ({
  src,
  href,
  Title,
  Description,
  dark,
  image1,
  image2,
  image3,
  image4,
}) => {
  return (
    <div className="  shadow-lg shadow-gray-800 group rounded-lg relative overflow-hidden max-[768px]:w-[80vw] ">
      <div className="bottom-10">
        <Link href={href}>
          <div
            className="absolute left-10 bottom-0 group-hover:bottom-[13vw] max-[768px]:group-hover:bottom-[34vw] max-[768px]:text-leftg group-hover:opacity-100 :duration-1000 opacity-0 font-black text-2xl"
            id="title"
          >
            {Title}
          </div>
          <div
            className={`absolute left-10 max-[768px]:text-left bottom-[11vw]  group-hover:bottom-26 max-[768px]:group-hover:bottom-[20vw] max-[768px]:group-hover:text-[4.6vw]  group-hover:opacity-100 opacity-0 transition-all duration-500 
            ${dark ? "text-black" : "text-white"}`}
          >
            {Description}
          </div>

          <div className="absolute left-[5vw]  bottom-0 group-hover:bottom-[5vw] max-[768px]:group-hover:bottom-5 max-[768px]:left-[10vw] max-[768px]:w-[9vw] group-hover:opacity-100 opacity-0 transition-all duration-500">
            <Image src={image1} alt={""} className="w-10" />
          </div>
          <div className="absolute left-[10vw] bottom-0 group-hover:bottom-[5vw] max-[768px]:group-hover:bottom-5 max-[768px]:left-[30vw] max-[768px]:w-[9vw] group-hover:opacity-100 opacity-0 transition-all duration-500">
            <Image src={image2} alt={""} className="w-10" />
          </div>
          <div className="absolute left-[15vw] bottom-0 group-hover:bottom-[5vw] max-[768px]:group-hover:bottom-5 max-[768px]:left-[50vw] max-[768px]:w-[9vw] group-hover:opacity-100 opacity-0 transition-all duration-500">
            <Image
              src={image3}
              alt={""}
              className={`${dark ? "invert-0" : "invert"} w-14 mb-3`}
            />
          </div>
          <div className="absolute left-[15vw] bottom-0 group-hover:bottom-[5vw] max-[768px]:group-hover:bottom-5 max-[768px]:left-[50vw] max-[768px]:w-[9vw] group-hover:opacity-100 opacity-0 transition-all duration-500">
            <Image src={image4} alt={""} className={`w-12 -mb-1`} />
          </div>
          <Image
            src={src}
            alt=""
            className={` rounded-lg group-hover:scale-125 duration-500 ${
              dark ? "group-hover:opacity-10" : "group-hover:opacity-10"
            }`}
            id="ImageProject"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
