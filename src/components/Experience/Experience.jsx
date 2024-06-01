import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h2 className={styles.title}>Soft Skills</h2>
      <div  className={styles.content}>
        <p>
          In addition to my technical expertise as a developer, my engineering education has equipped me with valuable soft skills and foundational knowledge. Through rigorous coursework and practical experience, I have honed my communication skills in both English and French, enabling effective collaboration with diverse teams. Moreover, my understanding of Scrum methodology has instilled in me the principles of agile project management, facilitating efficient project execution and delivery. Additionally, my coursework in data structures and complexity has provided me with a solid foundation in problem-solving and analytical thinking, essential for addressing complex challenges in software development. By leveraging this unique combination of technical and soft skills, I am well-equipped to contribute effectively to multidisciplinary engineering projects and deliver impactful solutions.
        </p>
      </div>
      
    </section>
  );
};