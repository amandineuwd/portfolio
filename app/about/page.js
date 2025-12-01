export default function AboutPage() {
  return (
    <div className="about-container">
      <h1>About me</h1>

      <img src="./images/amandine3.jpeg" alt="Amandine" className="about-photo" />

      <p className="about-text">
        Hi! I’m Amandine — an engineering student from ESILV, specializing in Creative
        Technology. I’m passionate about designing experiences that make everyday life 
        smoother, easier, and more meaningful. I love exploring how technology can 
        seamlessly blend into our routines and enhance the way we interact with the world.
        <br /><br />
        Over the years, I’ve developed a strong interest in product design, and I’ve had 
        the chance to put this into practice through several professional experiences and 
        projects. Turning ideas into tangible, human-centered solutions is what excites me 
        the most.
        <br /><br />
        Outside of tech, I’m also deeply inspired by everything creative. I’m obsessed 
        with art, cinema – my favorite movie of all time is <em>Se7en</em> by David Fincher, 
        photography, traveling, and hunting for unique vintage pieces!!
        <br /><br />
        Have you guessed who my favorite artist is? Hint: she’s Japanese…
        <br /><br />
        <strong>Here are some useful links if you want to know more about me!</strong>
      </p>

      <ul className="about-links">
        <li>
          <a href="https://www.linkedin.com/in/amandine-underwood-6967a8274/" target="_blank">My LinkedIn</a>
        </li>
        <li>
          <a href="https://www.esilv.fr/formations/cycle-ingenieur/majeures/creative-technology/" target="_blank">
            Learn more about my school & major
          </a>
        </li>
        <li>
          <a href="https://boxd.it/9s17b" target="_blank">My Letterboxd</a>
        </li>
        <li>
          <a href="./documents/CV_EN.jpg" target="_blank" download>
            My Resume (download)
          </a>
        </li>
      </ul>
      {/* Pumpkin Decorations */}
    <div className="pumpkins-container">
    <img src="./images/image.png" className="pumpkin p1" />
    <img src="./images/image2.png" className="pumpkin p2" />
    <img src="./images/image3.png" className="pumpkin p3" />
    <img src="./images/image4.png" className="pumpkin p4" />
    <img src="./images/image5.png" className="pumpkin p5" />
    <img src="./images/image6.png" className="pumpkin p6" />
    <img src="./images/image.png" className="pumpkin p7" />
    <img src="./images/image2.png" className="pumpkin p8" />
    <img src="./images/image3.png" className="pumpkin p9" />
    <img src="./images/image4.png" className="pumpkin p10" />
    </div>

    </div>
  );
}
