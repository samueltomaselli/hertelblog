"use client";

import React from "react";
import Iframe from "react-iframe";

function IFrame() {
  return (
    <>
      <Iframe
        loading="lazy"
        url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1786.3201433638749!2d-49.06380028589934!3d-26.435082388291878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1650768371537!5m2!1spt-BR!2sbr"
        width="100%"
        max-width="330"
        height="201px"
        id=""
        className=""
        display="block"
        position="relative"
        title="localization"
      />
    </>
  );
}

export default IFrame;
