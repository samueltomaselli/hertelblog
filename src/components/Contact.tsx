import {
  FaAt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";
import IFrame from "./IFrame";
import Form from "./Form";

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
                  aria-label="Facebook"
                  href="https://www.facebook.com/herteladvocacia"
                  className="hover:brightness-75 transition-all hover:scale-105"
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  aria-label="Instagram"
                  href="https://www.instagram.com/herteladvocacia/"
                  className="hover:brightness-75 transition-all hover:scale-105"
                >
                  <FaInstagramSquare />
                </Link>
                <Link
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/hertel-sociedade-individual-de-advocacia/"
                  className="hover:brightness-75 transition-all hover:scale-105"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            <IFrame />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
