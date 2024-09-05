import React from "react";
import about_bg from "../../images/about_bg.png";
import "./about.css";

function About() {
  return (
    <div>
      <div className="ImageAbout" />

      <div className="AboutConteiner">
        <h2 className="Title">О компании</h2>

        <div className="AboutImegeContener">
          <img className="AboutPic" src={about_bg} alt="" />

          <p className="AboutPage">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            quaerat corrupti, quidem ut cum molestias est? Incidunt pariatur
            sunt cumque impedit asperiores suscipit consequatur sapiente, eos
            repellat quas temporibus unde? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Eaque quaerat corrupti, quidem ut cum
            molestias est? Incidunt pariatur sunt cumque impedit asperiores
            suscipit consequatur sapiente, eos repellat quas temporibus unde?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            quaerat corrupti, quidem ut cum molestias est? Incidunt pariatur
            sunt cumque impedit asperiores suscipit consequatur sapiente, eos
            repellat quas temporibus unde? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Eaque quaerat corrupti, quidem ut cum
            molestias est?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
