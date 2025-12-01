"use client";

import ProjectCarousel from "../../../components/ProjectCarousel";

export default function Page() {
  return (
    <div className="experience-wrapper">

      <section className="experience-section">
        <div className="experience-content">

          <ProjectCarousel
            images={[
              "./images/terubotcouv.png",
              "./images/app1.png",
              "./images/userflow.png",
              "./images/palette.png",
              "./images/app2.png",
              "./images/app3.png",
              "./images/app4.png",
              "./images/app5.png",
            ]}
          />

        </div>
      </section>

    </div>
  );
}

