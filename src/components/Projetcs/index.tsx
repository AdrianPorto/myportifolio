import React from "react";
import Modal from "./modalProjects";

// import { Container } from './styles';
import Curriculou from "../../../public/Curriculou.png";
import Feito from "../../../public/feitocrianca.png";
import Exodo from "../../../public/exodo.png";
import TypeScript from "../../../public/typescript.png";
import Tailwindcss from "../../../public/tailwindcss.png";
import Nextjs from "../../../public/next.svg";

interface Props {
  dark: boolean;
}

const Projetcs: React.FC<Props> = ({ dark }) => {
  return (
    <div className="flex flex-1 justify-center text-center ml-[30vw] mr-[30vw] mt-40 reveal">
      <div className="">
        <div
          className="text-black font-black text-5xl h-14 max-[768px]:h-40  "
          id="title"
        >
          Meus Projetos
        </div>
        <div className="mt-10 space-y-32">
          <Modal
            src={Curriculou}
            href="https://curriculou.vercel.app/"
            Title={"Curriculou"}
            Description={"Site para criação de Curriculos "}
            dark={dark}
            image1={TypeScript}
            image2={Tailwindcss}
            image3={Nextjs}
          ></Modal>
          <Modal
            src={Feito}
            href="https://feitocriancaleads.vercel.app/"
            Title={"Feito Criança"}
            Description={"Landing Page de roupas de crianças"}
            dark={dark}
            image1={TypeScript}
            image2={Tailwindcss}
            image3={Nextjs}
          ></Modal>
          <Modal
            src={Exodo}
            href="https://www.livroexodourbano.com.br/"
            Title={"Êxodo Urbano"}
            Description={"Site de venda do Livro Êxodo Urbano"}
            dark={dark}
            image1={TypeScript}
            image2={Tailwindcss}
            image3={Nextjs}
          ></Modal>
        </div>
      </div>
    </div>
  );
};

export default Projetcs;
