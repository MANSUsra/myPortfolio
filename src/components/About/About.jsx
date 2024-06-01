import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Enthusiast with a Java Flair</h3>
              <br></br>
              <p>
              I'm a software engineering student at ENSAO, proficient in both frontend and backend development. With a knack for Java, I seamlessly transition between roles, making me an adept full-stack developer.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};