import { useEffect, useState } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Image from "next/image";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 4000);

    return () => clearInterval(interval);
  });

  const slides = [
    {
      url: "header.webp",
    },
    {
      url: "header2.jpg",
    },
    {
      url: "header3.jpg",
    },
    {
      url: "header4.jpg",
    },
  ];

  return (
    <div id="home" className="scroll-mt-24 text-black h-[calc(100vh-96px)] relative">
      <div className="absolute inset-0 -z-10 w-full">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={`/${slide.url}`}
            alt="Imagem de fundo"
            fill
            className={`object-cover duration-1000 transition-opacity  ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            priority={true}
          />
        ))}
      </div>
      <div className="relative z-10 bg-[rgba(0,0,0,0.7)] h-full text-white text-2xl flex items-center justify-center flex-col px-4">
        <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase text-center text-white font-bold mb-10">
          ÉTICA, RESPONSABILIDADE E <br /> PROFISSIONALISMO
        </h1>
        <a
          href=".#contact"
          className="bg-primary p-4 rounded-sm text-base font-bold flex gap-2 items-center hover:brightness-75 transition-all"
        >
          ENTRAR EM CONTATO <BsBoxArrowInUpRight className="text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default Home;
