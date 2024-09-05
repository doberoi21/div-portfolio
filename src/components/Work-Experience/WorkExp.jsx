// import React from "react";
import { WorkData } from "./WorkData";
import WorkCard from "./WorkCard";
import "./style/Work-Exp.css";
import HeadingSection from "../Heading-Section";

function WorkExpView() {
  return (
    <section id="work-experience">
      <div className="work-exp-container">
        <HeadingSection sectionName={"Work Experience"} />
        <div>
          {WorkData.map((work) => (
            <WorkCard work={work} key={work.key} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExpView;
