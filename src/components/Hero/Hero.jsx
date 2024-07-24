import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yousra</h1>
        <p className={styles.description}>
        A Software Engineering student passionate about crafting innovative solutions and mastering the art of code.
        <br /><br /> Welcome to my portfolio!
        </p>
        <a href="mailto:yousramansour2019@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/myPic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};