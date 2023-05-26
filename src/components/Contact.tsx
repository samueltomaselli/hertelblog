import Iframe from "react-iframe";
import {
  FaAt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

function Contact() {
  return (
    <div
      id="contact"
      className="scroll-mt-20 w-screen flex flex-col justify-center items-center pt-20 pb-20 bg-white px-4"
    >
      <h1 className="text-center font-bold text-3xl mb-2 uppercase">Contate-nos</h1>
      <h2 className="uppercase text-primary font-semibold text-xl mb-10 text-center">
        Escritório localizado em Schroeder - SC
      </h2>
      <div className="max-w-[1140px] flex items-center justify-center">
        <div className="w-full max-w-[820px] bg-white shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] overflow-hidden grid md:grid-cols-[repeat(2,1fr)] grid-cols-[1fr] rounded-[10px] ">
          <div className="sm:p-7 p-4 relative gap-3 flex flex-col ">
            <h3 className="text-primary text-2xl font-semibold mb-2">Endereços</h3>
            <div className="flex flex-col gap-2 text-base font-light">
              <div className="flex items-center gap-2">
                <span>
                  <FaMapMarkedAlt className="text-2xl mr-2 text-primary" />
                </span>
                <p>
                  Av. Marechal Castelo Branco n° 380 — Bairro Centro Sul — Schroeder — SC —
                  89275-000
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <FaAt className="text-2xl mr-2 text-primary" />
                </span>
                <p className="">advocacia@hertel.com.br</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <FaPhoneAlt className="text-2xl mr-2 text-primary" />
                </span>
                <p className="">+55 47 99197-3455</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-light">Conecte-se conosco:</p>
              <div className="flex gap-2 text-4xl text-primary mb-2">
                <Link
                  href="https://www.facebook.com/herteladvocacia"
                  className="hover:brightness-75 transition-all hover:scale-105"
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  href="https://www.instagram.com/herteladvocacia/"
                  className="hover:brightness-75 transition-all hover:scale-105"
                >
                  <FaInstagramSquare />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/hertel-sociedade-individual-de-advocacia/"
                  className="hover:brightness-75 transition-all hover:scale-105"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1786.3201433638749!2d-49.06380028589934!3d-26.435082388291878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1650768371537!5m2!1spt-BR!2sbr"
              width="100%"
              max-width="330"
              height="201px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </div>
          <div className="sm:p-7 p-4 relative gap-3 flex flex-col bg-primary before:absolute before:w-[26px] before:h-[26px] before:bg-primary before:rotate-45 before:left-[-13px] before:top-[240px]">
            <form
              action="https://formsubmit.co/advocacia@hertel.com.br"
              className="text-white"
              autoComplete="off"
            >
              <h3 className="text-white font-semibold text-2xl mb-2">Contato via e-mail</h3>
              <div className="my-4">
                <input
                  type="text"
                  name="Nome"
                  placeholder="Nome"
                  className="w-full bg-transparent placeholder:text-white outline-none font-normal text-base tracking-wide px-5 py-2 rounded-sm border-2 border-white"
                />
              </div>
              <div className="my-4">
                <input
                  type="text"
                  name="E-mail"
                  placeholder="E-mail"
                  className="w-full bg-transparent placeholder:text-white outline-none font-normal text-base tracking-wide px-5 py-2 rounded-sm border-2 border-white"
                />
              </div>
              <div className="my-4">
                <input
                  type="text"
                  name="Assunto"
                  placeholder="Assunto"
                  className="w-full bg-transparent placeholder:text-white outline-none font-normal text-base tracking-wide px-5 py-2 rounded-sm border-2 border-white"
                />
              </div>
              <div className="my-4">
                <textarea
                  name="Mensagem"
                  placeholder="Mensagem"
                  className="w-full bg-transparent placeholder:text-white outline-none border-2 border-white min-h-[150px] resize-none px-5 py-3 rounded-sm"
                ></textarea>
              </div>
              <input type="hidden" name="_template" value="table" />
              <input
                type="submit"
                value="Enviar"
                className="bg-white text-base text-primary leading-none cursor-pointer font-semibold px-5 py-3  rounded-sm border-2 border-solid border-white hover:bg-primary hover:text-white transition-all"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
