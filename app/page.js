"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  // IMAGES DU CARROUSEL
  const images = [
    "./images/app1.png",
    "./images/app2.png",
    "./images/cuir1.jpg",
    "./images/cuir2.jpg",
    "./images/eyes.jpeg",
    "./images/lucas.jpg",
    "./images/piano.jpeg",
    "./images/pianoemporte.jpg",
    "./images/sensors.jpeg",
    "./images/ss.jpg",
    "./images/terubotcouv.png",
  ];

  const [shuffled, setShuffled] = useState([]);

  // Mélanger aléatoirement les images au chargement
  useEffect(() => {
    setShuffled(images.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div>
      {/* Section Présentation */}
      <section className="home-container">
        <img src="./images/amandine2.jpg" alt="Amandine" />

        <div>
          <h1>
            Hi! I'm <strong>Amandine Underwood</strong>, a Creative Technologist &
            Product Designer in the making
          </h1>

          <p style={{ marginTop: "20px", maxWidth: "500px" }}>
            Driven by the ambition to transform everyday life through design and
            technology, I love imagining, prototyping and testing useful,
            intuitive and human-centered experiences.
            <br /><br />
            Feel free to browse through my projects, discover my experiences and
            learn more about me through this portfolio!
          </p>
        </div>
      </section>

      {/* CARROUSEL AVEC DÉFILEMENT AUTOMATIQUE */}
      <div className="carousel" id="carousel">
        {shuffled.map((img, i) => (
          <img key={i} src={img} alt="preview" />
        ))}
      </div>

      <style jsx>{`
        #carousel {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

        {/* SECTION CONTACT */}
      <section className="contact-section">
        <h2>Contact me</h2>

        <div className="contact-item">
          <span>Email :</span>
          <a href="mailto:amandineunderwood@gmail.com">
            amandineunderwood@gmail.com
          </a>

          {/* Icône copier */}
          <button
            className="copy-btn"
            onClick={() => {
              navigator.clipboard.writeText("amandineunderwood@gmail.com");
              alert("Email copied!");
            }}
          >
            📋
          </button>
        </div>

        <div className="contact-item">
          <span>LinkedIn :</span>
          <a
            href="https://www.linkedin.com/in/amandine-underwood-6967a8274/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my profile
          </a>
        </div>
      </section>
    </div>
  );
}
