"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="fixed w-screen z-50 flex justify-center bg-white h-24 shadow-xl px-4 ">
        <div className="flex items-center justify-between w-[1140px]">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={80} priority={true} />
          </Link>
          <nav className="lg:flex gap-5 hidden tracking-wide">
            <a
              href="..#home"
              className="text-xl font-semibold uppercase text-black flex h-24 items-center border-b-4 border-b-transparent hover:text-primary transition-colors hover:border-b-4 hover:border-b-primary"
            >
              HOME
            </a>
            <a
              href="..#about"
              className="text-xl font-semibold uppercase text-black flex h-24 items-center border-b-4 border-b-transparent hover:text-primary transition-colors hover:border-b-4 hover:border-b-primary "
            >
              O ESCRITÓRIO
            </a>
            <a
              href="..#areas"
              className="text-xl font-semibold uppercase text-black flex h-24 items-center border-b-4 border-b-transparent hover:text-primary transition-colors hover:border-b-4 hover:border-b-primary"
            >
              ÁREAS DE ATUAÇÃO
            </a>
            <a
              href="..#team"
              className="text-xl font-semibold uppercase text-black flex h-24 items-center border-b-4 border-b-transparent hover:text-primary transition-colors hover:border-b-4 hover:border-b-primary"
            >
              EQUIPE
            </a>
            <a
              href="..#contact"
              className="text-xl font-semibold uppercase text-black flex h-24 items-center border-b-4 border-b-transparent hover:text-primary transition-colors hover:border-b-4 hover:border-b-primary"
            >
              CONTATO
            </a>
            <Link
              className="text-xl font-semibold uppercase text-black flex h-24 items-center border-b-4 border-b-transparent hover:text-primary transition-colors hover:border-b-4 hover:border-b-primary"
              href="/blog"
            >
              Blog
            </Link>
          </nav>
          <button
            name="mobile-menu"
            className="text-4xl text-primary lg:hidden"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>
      {menu ? (
        <div className="fixed mt-[90px] flex z-50 bg-white h-screen w-screen flex-col items-center gap-10 text-primary lg:hidden">
          <a
            onClick={() => setMenu(false)}
            href=".#home"
            className="text-xl font-semibold uppercase text-black flex  items-center mt-14"
          >
            HOME
          </a>
          <a
            onClick={() => setMenu(false)}
            href=".#about"
            className="text-xl font-semibold uppercase text-black flex  items-center "
          >
            O ESCRITÓRIO
          </a>
          <a
            onClick={() => setMenu(false)}
            href=".#areas"
            className="text-xl font-semibold uppercase text-black flex  items-center "
          >
            ÁREAS DE ATUAÇÃO
          </a>
          <a
            onClick={() => setMenu(false)}
            href=".#team"
            className="text-xl font-semibold uppercase text-black flex  items-center "
          >
            EQUIPE
          </a>
          <a
            onClick={() => setMenu(false)}
            href=".#contact"
            className="text-xl font-semibold uppercase text-black flex  items-center "
          >
            CONTATO
          </a>
          <Link
            onClick={() => setMenu(false)}
            className="text-xl font-semibold uppercase text-black flex  items-center "
            href="/blog"
          >
            Blog
          </Link>
        </div>
      ) : null}
    </>
  );
}

export default Header;
