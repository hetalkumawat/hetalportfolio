import React from 'react';
import styles from "./Aboutme.module.css";
import { getImageUrl } from "../../utils";

const Aboutme = () => {
  return (
    <section className={styles.container} id="about" >
      <h2 className={styles.title}>I'm a...</h2>
      <div className={styles.content}>

      <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}

        />
         < ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>

            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>

              <h3>Full Stack  Developer</h3>
              <p>
                I am a frontend developer with experience in building responsive
                and optimized sites using MERN stack.
              </p>
            </div></li>
      
            <li className={styles.aboutItem}>

            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>

              <h3> DSA Enthusiast</h3>
              <p>
              I solve DSA problems in Java and have successfully tackled 150+ problems, honing my problem-solving and algorithmic skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>

            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>

              <h3>Learning ML in Python</h3>
              <p>
              Currently learning Machine Learning in Python, exploring algorithms, data analysis, and model building.
              </p>
            </div>
          </li>
        </ul></div>
    </section>
  )
}

export default Aboutme;
