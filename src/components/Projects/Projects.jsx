import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <p className={styles.note}><i>Kindly note that the projects listed above represent only the latest ones. I have more projects in the pipeline.<br></br> Stay tuned for upcoming developments!</i></p>
    </section>
  );
};