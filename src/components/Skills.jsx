import React from "react";
import SkillsComponent from "./SkillsComponent";
import skillsData from "../data/skills.json";
export const Skills = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-red-900">
        My Skill Galaxy
      </h2>
      <SkillsComponent skills={skillsData.skills} />
    </section>
  );
};
export default Skills;
