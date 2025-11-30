"use client";
import { useState } from "react";

export default function ProjectCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="carousel-container">
      <img src={images[index]} className="carousel-img" />

      <button className="carousel-btn left" onClick={prev}>
        ❮
      </button>
      <button className="carousel-btn right" onClick={next}>
        ❯
      </button>
    </div>
  );
}