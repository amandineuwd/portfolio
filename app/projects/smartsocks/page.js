"use client";

import ProjectCarousel from "../../../components/ProjectCarousel";

export default function Page() {
  return (
    <div className="experience-wrapper">

      <section className="experience-section">
        <div className="experience-content">

          <ProjectCarousel
            images={[
              "./images/ss.JPG",
              "./images/sensors.jpeg",
              "./images/ss1.jpeg",
              "./images/webapp.JPG",
              "./images/recap.png",
            ]}
          />

        </div>
      </section>

    </div>
  );
}
