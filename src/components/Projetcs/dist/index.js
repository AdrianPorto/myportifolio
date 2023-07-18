"use strict";
exports.__esModule = true;
var react_1 = require("react");
var modalProjects_1 = require("./modalProjects");
// import { Container } from './styles';
var Curriculou_png_1 = require("../../../public/Curriculou.png");
var feitocrianca_png_1 = require("../../../public/feitocrianca.png");
var exodo_png_1 = require("../../../public/exodo.png");
var typescript_png_1 = require("../../../public/typescript.png");
var tailwindcss_png_1 = require("../../../public/tailwindcss.png");
var next_svg_1 = require("../../../public/next.svg");
var Projetcs = function (_a) {
    var dark = _a.dark;
    return (react_1["default"].createElement("div", { className: "flex flex-1 justify-center text-center ml-[30vw] mr-[30vw] mt-40 reveal" },
        react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement("div", { className: "text-black font-black text-5xl h-14 max-[768px]:h-40  ", id: "title" }, "Meus Projetos"),
            react_1["default"].createElement("div", { className: "mt-10 space-y-32" },
                react_1["default"].createElement(modalProjects_1["default"], { src: Curriculou_png_1["default"], href: "https://curriculou.vercel.app/", Title: "Curriculou", Description: "Site para criação de Curriculos ", dark: dark, image1: typescript_png_1["default"], image2: tailwindcss_png_1["default"], image3: next_svg_1["default"] }),
                react_1["default"].createElement(modalProjects_1["default"], { src: feitocrianca_png_1["default"], href: "https://feitocriancaleads.vercel.app/", Title: "Feito Criança", Description: "Landing Page de roupas de crianças", dark: dark, image1: typescript_png_1["default"], image2: tailwindcss_png_1["default"], image3: next_svg_1["default"] }),
                react_1["default"].createElement(modalProjects_1["default"], { src: exodo_png_1["default"], href: "https://www.livroexodourbano.com.br/", Title: "Êxodo Urbano", Description: "Site de venda do Livro Êxodo Urbano", dark: dark, image1: typescript_png_1["default"], image2: tailwindcss_png_1["default"], image3: next_svg_1["default"] })))));
};
exports["default"] = Projetcs;
