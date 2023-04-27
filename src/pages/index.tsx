import Image from "next/image";
import { Inter } from "next/font/google";
import Top from "@/components/Top";
import { useEffect, useState } from "react";
import Perfil from "@/components/Perfil";
import About from "@/components/About";
import Projetcs from "@/components/Projetcs";
import Contact from "@/components/Contact";
import "animate.css";
const inter = Inter({ subsets: ["latin"] });
import useStorage from "../hooks/useStorage";
import TopMobile from "@/components/Mobile/Top";
export default function Home() {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  useEffect(function mount() {
    window.addEventListener("scroll", reveal);
  });

  const reveal2 = () => {
    var reveals = document.querySelectorAll(".reveal2");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  useEffect(function mount() {
    window.addEventListener("scroll", reveal2);
  });

  const [dark, setDark] = useState<boolean>(true);

  const toggleDark = () => {
    setDark(!dark);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      className={`flex min-w-screen flex-col ${
        dark ? "bg-white" : "bg-black"
      } duration-500 ${inter.className}`}
    >
      {isMobile ? (
        <div
          className={`animate__fadeInRight animate__animated ${
            dark ? "bg-white" : "bg-black  backdrop-blur-3xl bg-opacity-80"
          } fixed z-50   `}
        >
          <TopMobile dark={dark} setDark={setDark} />
        </div>
      ) : (
        <Top dark={dark} setDark={setDark}></Top>
      )}
      <Perfil dark={dark} setDark={setDark}></Perfil>
      <div className="animate__animated animate__fadeInUp reveal">
        <About dark={dark} setDark={setDark}></About>
      </div>
      <div className=" animate__animated animate__fadeInUp" id="projects">
        <Projetcs dark={dark}></Projetcs>
      </div>
      <Contact dark={dark} setDark={setDark}></Contact>
    </main>
  );
}
