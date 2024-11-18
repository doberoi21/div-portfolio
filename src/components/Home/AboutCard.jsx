// import React from 'react'
import profileImg from "../../assets/Home/profile.png";
import alternate from '../../assets/Home/alternate.png';
import { socialMediaData } from "./SocialMediaData";
import "./style/Home.css";

function AboutCard() {
  return (
    <div className="About-section-container">
      <div className="About-info-section">
        <h2>Hi , </h2>
        <h2>I am Divyanshi Oberoi</h2>
        <h2>A Software Developer based in Chicago,IL.</h2>
        <div className="socialMedia-icons">
          {socialMediaData.map((socialIcon) => (
            <a
              key={socialIcon.id}
              href={socialIcon.socialLink}
              target="__blank"
            >
              <img
                src={socialIcon.icon}
                height={35}
                width={35}
                key={socialIcon.id}
                alt={socialIcon.label}
              />
            </a>
          ))}
        </div>
        <a
          href="https://drive.google.com/file/d/1bh1w40jKi1uN4PyxwW2tEFOLzIyE9_UH/view?usp=sharing"
          target="__blank"
        >
          <div className="resume-button">
            <span>View Resume</span>
          </div>
        </a>
      </div>
      <div className="about-section-img">
        <img src={alternate} className="profileImgDimensions" />
      </div>
    </div>
  );
}

export default AboutCard;
