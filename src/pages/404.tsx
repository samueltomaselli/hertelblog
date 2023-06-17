import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Whatsapp from "@/components/Whatsapp";
import Link from "next/link";
import React from "react";

function Error404() {
  return (
    <>
      <Header />
      <main className="grid min-h-screen place-items-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Desculpe, não conseguimos encontrar a página que você está procurando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voltar para Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}

export default Error404;
