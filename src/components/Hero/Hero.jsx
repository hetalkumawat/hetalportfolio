import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace 'cv.pdf' with the path to your actual CV file
    const downloadUrl = getImageUrl("hero/hetalresumenew.pdf");
    window.open(downloadUrl, "_blank");
  };
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Hetal Kumawat.</h1>

          <p className={styles.description}>
            I'm a fresh face in web development, specializing in React and
            Node.js."Ready to collaborate and create something extraordinary?
            Let's connect and make magic happen!"
          </p>
          <div className={styles.buttons}>
            <button className={styles.contactBtn}>
              <a
                className={styles.newanchortag}
                href="mailto:reach.hetalk@gmail.com"
              >
                Contact Me
              </a>
            </button>
            {/* Add the 'Download CV' button */}
            <button className={styles.contactBtn} onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </div>
  );
};

export default Hero;
