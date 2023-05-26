import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { MdFamilyRestroom, MdPerson } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { FaSuitcase } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";

import Cards from "./Card";

function Areas() {
  return (
    <div
      id="areas"
      className="scroll-mt-20 w-screen flex flex-col justify-center items-center pt-20 pb-20 bg-white shadow-[0_1px_6px_0_rgb(32_33_36_/_28%)] "
    >
      <h1 className="text-center font-bold text-3xl mb-14">ÁREAS DE ATUAÇÃO</h1>
      <div className="w-screen max-w-[1140px] flex xl:justify-between justify-center flex-wrap gap-[30px]">
        <Cards
          title="Direito da Família e Sucessório"
          icon={<MdFamilyRestroom className="text-primary text-6xl" />}
          content="Área específica que regula relações pessoais e patrimoniais entre pessoas unidas pelo parentesco, matrimônio, união estável etc. Atuação em divórcios, inventários, doações e planejamento sucessório."
        />
        <Cards
          title="Direito Cível"
          icon={<MdPerson className="text-primary text-6xl" />}
          content="Abrange os direitos e deveres das relações com pessoas e coisas. Atuação com execuções, cobranças, indenizações, direitos do consumidor, área bancária, análise, elaboração e revisão de contratos. Ramo do direito que trata e regulamenta relações envolvendo bens imóveis, como compra e venda, usucapião, locações, despejos, condomínios e financiamentos."
        />
        <Cards
          title="Direito Previdenciario"
          icon={<BiNews className="text-primary text-6xl" />}
          content="Área do direito voltada às questões relacionadas à Seguridade Social, como aposentadorias, requerimentos de auxílio-doença e pensão por morte."
        />
        <Cards
          title="Direito Imobiliário"
          icon={<BsBuildingsFill className="text-primary text-6xl" />}
          content="Ramo do direito que trata e regulamenta relações envolvendo bens imóveis, como compra e venda, usucapião, locações, despejos, condomínios e financiamentos."
        />
        <Cards
          title="Direito Empresarial e Tributário"
          icon={<FaSuitcase className="text-primary text-6xl" />}
          content="Atuação consultiva e assessoramento extrajudicial e contencioso em constituição de sociedades e reorganização societária, recuperação de crédito, habilitação e impugnação de crédito em recuperação judicial e falência, contratos de franquia, representação comercial, mercantis e de relações de consumo, renegociação de dívidas e planejamento tributário."
        />
        <Cards
          title="Atuação Extrajudicial"
          icon={<SlEnvolopeLetter className="text-primary text-6xl" />}
          content="Atuação consultiva e assessoramento extrajudicial nos mais diversos ramos."
        />
      </div>
    </div>
  );
}

export default Areas;
