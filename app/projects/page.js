import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="projects-container">
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>Projects</h1>

      <div className="project-list">

        {/* Terubot */}
        <Link href="/projects/terubot" className="project-wrapper">
          <div className="project-item-centered">
            <h2>Terubot</h2>
            <img src="/images/terubotcouv.png" alt="Terubot" />
            <p>An interactive educational experience using robotics and playful learning.</p>
          </div>
        </Link>

        {/* Smart Socks */}
        <Link href="/projects/smart-socks" className="project-wrapper">
          <div className="project-item-centered">
            <h2>Smart Socks</h2>
            <img src="/images/ss2.jpg" alt="Smart Socks" />
            <p>A wearable device that captures biosignals through textile sensors.</p>
          </div>
        </Link>

        {/* PianoPatch */}
        <Link href="/projects/pianopatch" className="project-wrapper">
          <div className="project-item-centered">
            <h2>PianoPatch</h2>
            <img src="/images/piano.jpeg" alt="PianoPatch" />
            <p>A soft, portable music interface designed for playful learning.</p>
          </div>
        </Link>

      </div>
    </div>
  );
}
