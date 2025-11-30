"use client";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Terubot",
      image: "/images/terubotcouv.png",
      description:
        "A social robot designed to improve communication, empathy and cognitive engagement.",
    },
    {
      title: "Smart Socks",
      image: "/images/ss2.jpg",
      description:
        "Wearable socks integrating biometric sensors, designed to track physiological signals.",
    },
    {
      title: "PianoPatch",
      image: "/images/piano.jpeg",
      description:
        "An interactive piano patch project exploring sound, playfulness and creative interaction.",
    },
    {
      title: "Three.js Experiment",
      image: "/images/labubu.jpeg",
      description:
        "A 3D interactive experiment built with Three.js, combining design and web technologies.",
    },
  ];

  return (
    <div className="projects-wrapper">
      {projects.map((p, index) => (
        <section key={index} className="project-section">
          <h2 className="project-title">{p.title}</h2>
          <img src={p.image} alt={p.title} className="project-image" />
          <p className="project-desc">{p.description}</p>
        </section>
      ))}
    </div>
  );
}
