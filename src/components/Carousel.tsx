import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }: any) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className=" relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: any, i: any) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                current === i ? "p-4" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
