// import React from 'react'
import SkillContainer from "./SkillContainer";
import {
  skillData,
  platformData,
  programmingData,
  softSkillData,
} from "./SkillData";
import "./style/skill.css";
import HeadingSection from "../Heading-Section";

const SkillView = () => {
  return (
    <div>
      <section id="skills">
        <HeadingSection sectionName={"Skills"} />
        <h4 className="skill-subhead">Programming</h4>
        <div className="skill-header-conatiner">
          {programmingData.map((language) => (
            <SkillContainer skill={language} key={language.id} />
          ))}
        </div>
        <h4 className="skill-subhead">Technologies & Tools </h4>
        <div className="skill-header-conatiner">
          {skillData.map((skill) => (
            <SkillContainer skill={skill} key={skill.id} />
          ))}
        </div>
        <h4 className="skill-subhead">Platform</h4>
        <div className="skill-header-conatiner">
          {platformData.map((platform) => (
            <SkillContainer skill={platform} key={platform.id} />
          ))}
        </div>
        <h4 className="skill-subhead">Soft Skills</h4>
        <div className="skill-header-conatiner">
          {softSkillData.map((soft) => (
            <SkillContainer skill={soft} key={soft.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillView;
