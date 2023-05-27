import React from "react";
import Image from "next/image";

function Team() {
  return (
    <div
      id="team"
      className="scroll-mt-20 w-screen flex flex-col justify-center items-center pt-20 pb-20 bg-gray-100 shadow-[0_1px_6px_0_rgb(32_33_36_/_28%)] px-4"
    >
      <h1 className="text-center font-bold text-3xl mb-10 uppercase">Equipe</h1>

      <div className="max-w-[1140px] w-full flex md:flex-row flex-col justify-between gap-10 mb-20">
        <div className="max-w-[410px] w-full lg:h-[580px] h-[420px] relative shadow-2xl shadow-gray-700">
          <Image src="/lawyers-top.webp" alt="Haide Hertel" fill={true} />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-medium">Haide Hertel</h2>
            <h3 className="text-lg font-medium">Advogada</h3>
          </div>
          <div className="flex flex-col gap-3 text-lg font-light text-justify leading-8">
            <p>Regularmente inscrita na OAB/SC sob nº 43.088.</p>
            <p>Graduada em Direito pelo Centro Universitário – Católica de Santa Catarina.</p>
            <p>
              Pós-graduada em Direito Processual Civil (de acordo com o NCPC) pela Universidade
              Anhanguera – UNIDERP.
            </p>
            <p>
              Pós-graduanda em Prática de Direito de Família e Sucessões Avançada pelo Instituto
              Damásio de Direito.
            </p>
            <p>
              Vice-Presidente da Comissão de Direito Bancário do Instituto de Advogados de Santa
              Catarina – IASC (2019 – 2021).
            </p>
            <p>
              Vice-Presidente da Comissão da Jovem Advocacia da 23ª Subseção da OAB Santa Catarina –
              Jaraguá do Sul (2020 – 2021).
            </p>
            <p>
              Coordenadora de Comissões da 23ª Subseção da OAB Santa Catarina – Jaraguá do Sul (2022
              – 2024).
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] w-full flex md:flex-row flex-col-reverse justify-between gap-10">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-medium">Rafael Tomaselli</h2>
            <h3 className="text-lg font-medium">Advogado</h3>
          </div>
          <div className="flex flex-col gap-3 text-lg text-justify font-light leading-8">
            <p>Regularmente inscrito na OAB/SC sob nº 60.539.</p>
            <p>Graduado em Direito pelo Centro Universitário – Católica de Santa Catarina.</p>
            <p>
              Pós-graduando em Direito e Negócios Imobiliários pela Instituto Damásio de Direito.
            </p>
            <p>
              Presidente da Comissão de Esportes e Eventos da 23ª Subseção da OAB Santa Catarina –
              Jaraguá do Sul (2022-2024).
            </p>
            <p>
              Membro Consultivo da Comissão permanente de Direito Imobiliário da OAB Santa Catarina
              (2022).
            </p>
          </div>
        </div>
        <div className="max-w-[410px] w-full lg:h-[580px] h-[420px] relative shadow-2xl shadow-gray-700 ">
          <Image src="/lawyers-bottom.webp" alt="Rafael Tomaselli" fill={true} />
        </div>
      </div>
    </div>
  );
}

export default Team;
