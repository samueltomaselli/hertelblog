import { BsBoxArrowInUpRight } from "react-icons/bs";

function Home() {
  return (
    <div
      id="home"
      className="scroll-mt-24 text-black bg-[url('/header.webp')] h-[calc(100vh-96px)] bg-cover bg-center"
    >
      <div className="bg-[rgba(0,0,0,0.7)] h-full text-white text-2xl flex items-center justify-center flex-col px-4">
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