import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function Whatsapp() {
  return (
    <div className="fixed z-50 w-20 h-20 top-auto bottom-2 left-auto right-2 flex items-center justify-center">
      <a
        aria-label="whatsapp"
        className="w-[60px] h-[60px] bg-whatsapp rounded-full flex items-center justify-center"
        href="https://api.whatsapp.com/send?phone=5547991973455&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!"
      >
        <BsWhatsapp className="text-4xl text-white" />
      </a>
    </div>
  );
}

export default Whatsapp;
