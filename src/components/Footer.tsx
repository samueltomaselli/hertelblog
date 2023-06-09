import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="w-screen flex flex-col justify-center items-center pt-10 pb-10 bg-black">
        <div className="max-w-[1140px] flex items-center flex-col gap-10">
          <div className="flex text-white gap-5 flex-wrap items-center justify-center">
            <Link className="hover:text-primary" href=".#home">
              Home
            </Link>
            <Link className="hover:text-primary" href=".#about">
              Sobre nós
            </Link>
            <Link className="hover:text-primary" href=".#areas">
              Áreas de atuação
            </Link>
            <Link className="hover:text-primary" href=".#contact">
              Contato
            </Link>
            <Link className="hover:text-primary" href="/blog">
              Blog
            </Link>
          </div>
          <div className="flex text-white gap-6 text-xl">
            <Link
              aria-label="Facebook"
              href="https://www.facebook.com/herteladvocacia"
              className="transition-all hover:scale-105 hover:text-primary"
            >
              <FaFacebookF />
            </Link>
            <Link
              aria-label="Instagram"
              href="https://www.instagram.com/herteladvocacia/"
              className="transition-all hover:scale-105 hover:text-primary"
            >
              <FaInstagram />
            </Link>
            <Link
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/hertel-sociedade-individual-de-advocacia/"
              className="transition-all hover:scale-105 hover:text-primary"
            >
              <FaLinkedinIn />
            </Link>
          </div>
          <div className="text-white text-center">
            © 2023 - Hertel Sociedade Individual de Advocacia - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
