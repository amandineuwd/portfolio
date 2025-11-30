"use client";

import ProjectCarousel from "../../components/ProjectCarousel";

export default function ProjectsPage() {
  return (
    <div className="experience-wrapper">

      {/* ------------ TERUBOT ------------ */}
      <section className="experience-section">
        <div className="experience-content">

          <ProjectCarousel
            images={[
              "/images/terubotcouv.png",
              "/images/app1.png",
              "/images/userflow.png",
              "/images/palette.png",
              "/images/app2.png",
              "/images/app3.png",
              "/images/app4.png",
              "/images/app5.png",
            ]}
          />

          <div className="experience-text">
            <h1>TeruBot — Emotional Companion</h1>
            <h3>September 2025 – Now (work in progress)</h3>

            <p>
              TeruBot is an emotional companion inspired by the traditional Japanese
              <i> teru teru bozu</i>, designed to reflect and measure the “emotional temperature”
              of a group while supporting users through a dedicated app.
              <br /><br />
              The project has both <b>individual</b> and <b>collective</b> dimensions: individually,
              users interact with TeruBot to express, track, and understand their emotions;
              collectively, it aggregates the group’s feelings and sends positive messages to a
              shared community channel.
              <br /><br />
              The project combines <b>hardware</b> (electronics and expressive robot design)
              and <b>software</b> (UX/UI, app journey, emotional data collection). My main focus is on
              the software side: designing the user flow, app interfaces, and integrating
              emotion data into a smooth and engaging experience.
            </p>

            <div className="skills-tags">
              <span>UX/UI Design</span>
              <span>User Journey Mapping</span>
              <span>App Development</span>
              <span>Interaction Design</span>
              <span>Emotional Data Handling</span>
              <span>Multidisciplinary Collaboration</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------ SMART SOCKS ------------ */}
      <section className="experience-section">
        <div className="experience-content">

          <ProjectCarousel
            images={[
              "/images/ss.jpg",
              "/images/sensors.jpeg",
              "/images/ss1.jpeg",
              "/images/webapp.jpg",
              "/images/recap.png",
            ]}
          />

          <div className="experience-text">
            <h1>Smart Socks — Connected Socks</h1>
            <h3>September 2024 – April 2025</h3>

            <p>
              Smart Socks are connected socks integrating <b>biometric sensors</b> to help monitor and enhance 
              athletic performance. The goal was to design a wearable that feels as natural as regular 
              sports gear while offering meaningful insights into movement and muscle engagement.
              <br /><br />
              After researching relevant sports metrics, we experimented with conductive threads and 
              pressure-sensitive fabrics to find materials that were both comfortable and reliable. The 
              socks embed several sensors: <b>pressure sensors</b> to detect foot placement and weight distribution, <b>EMG 
              sensors</b> to measure muscle activity and fatigue, and <b>IMU sensors</b> to track orientation, 
              acceleration, and posture.
              <br /><br />
              Once the hardware pipeline was stable, we developed the software system to collect, process, and 
              visualize the data in real time through a clean web interface that I designed and built. The result 
              is a unified wearable-tech ecosystem that merges textile experimentation, sensor integration, and 
              intuitive data visualization to give athletes actionable insights.
              <br /><br />
              <a href="https://www.esilv.fr/en/smart-socks-an-innovation-bridging-technology-and-everyday-life/" target="_blank" style={{ textDecoration: "underline" }}>
                If you want to know more →
              </a>
            </p>

            <div className="skills-tags">
              <span>UX/UI Design</span>
              <span>Web Development</span>
              <span>Sensor Integration</span>
              <span>Data Visualization</span>
              <span>Textile Prototyping</span>
              <span>Hardware-Software Interaction</span>
              <span>User Research</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------ PIANO PATCH ------------ */}
      <section className="experience-section">
        <div className="experience-content">

          <ProjectCarousel
            images={[
              "/images/piano.jpeg",
              "/images/pianoemporte.jpg",
              "/images/cuir2.jpg",
              "/images/lucas.jpg",
              "/images/team.jpg",
            ]}
          />

          <div className="experience-text">
            <h1>PianoPatch — Colorful learning tool</h1>
            <h3>April – November 2025</h3>

            <p>
              PianoPatch is a sustainable and colorful leather patch system made from leftover leather scraps, 
              designed to help beginners learn piano through color association. We launched the project through 
              a <b>Kickstarter campaign</b>, a crowdfunding platform where creators present their ideas and secure 
              funding before production.
              <br /><br />
              Developing PianoPatch gave me a hands-on view of how a product actually comes to life—from early 
              concept design to prototyping, supplier sourcing, pricing, and building a campaign that clearly 
              communicates the value of the idea.
              <br /><br />
              <a
                href="https://www.kickstarter.com/projects/275565469/568928432?ref=akzxia&token=161a9667"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                See the Kickstarter campaign →
              </a>
            </p>

            <div className="skills-tags">
              <span>Product Design</span>
              <span>Prototyping</span>
              <span>Sustainable Material Use</span>
              <span>Supplier Sourcing</span>
              <span>Crowdfunding Strategy</span>
              <span>Production Management</span>
              <span>User-Centered Design</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
