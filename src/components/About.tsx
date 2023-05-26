import React from "react";
import Image from "next/image";

function About() {
  return (
    <div
      id="about"
      className="scroll-mt-20 w-screen flex flex-col justify-center items-center pt-20 pb-20 bg-gray-100 px-4"
    >
      <h1 className="text-center font-bold text-3xl mb-10">O ESCRITÓRIO</h1>
      <div className="max-w-[1140px] flex items-center flex-col lg:flex-row gap-10">
        <div className="flex flex-col items-center text-xl gap-5 text-justify font-light lg:flex-1 flex-auto">
          <p>
            Inaugurado em 2019, nosso escritório oferece serviços jurídicos especializados em
            diversos ramos do direito, criando soluções personalizadas que atendam aos interesses de
            nossos clientes.
          </p>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">NOSSO VALOR</h2>
            Nosso valor é atuar com organização e zelo, entregando feedback constante aos nossos
            clientes e buscando soluções eficientes para as demandas existentes por meio do
            conhecimento técnico de nossa equipe.
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">NOSSA MISSÃO</h2>
            <p>
              Garantir a satisfação de nossos clientes em termos de agilidade, qualidade de serviço,
              atendimento e transparência.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[550px] h-[300px] sm:h-[300px] lg:h-[450px] relative lg:flex-1 flex-auto">
          <Image src="/aboutus.jpg" alt="My Image" fill className="shadow-gray-500 shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default About;
