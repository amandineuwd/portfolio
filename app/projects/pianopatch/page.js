"use client";

import ProjectCarousel from "../../../components/ProjectCarousel";

export default function Page() {
  return (
    <div className="experience-wrapper">

      <section className="experience-section">
        <div className="experience-content">

          <ProjectCarousel
            images={[
              "./images/piano.jpeg",
              "./images/pianoemporte.jpg",
              "./images/cuir2.jpg",
              "./images/lucas.jpg",
              "./images/team.jpg",
            ]}
          />

        </div>
      </section>

    </div>
  );
}
