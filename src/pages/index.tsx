import About from "../components/About";
import Home from "../components/Home";
import Areas from "../components/Areas/Index";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Whatsapp from "@/components/Whatsapp";

export default function Page() {
  return (
    <>
      <Head>
        <title>Hertel</title>
      </Head>
      <main className="">
        <Header />
        <div className="pt-24">
          <Home />
          <About />
          <Areas />
          <Team />
          <Contact />
        </div>
        <Footer />
        <Whatsapp />
      </main>
    </>
  );
}
