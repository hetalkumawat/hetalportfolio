import React from 'react'
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

              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div></li>
      
            <li className={styles.aboutItem}>

            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>

              <h3>Python Programmer</h3>
              <p>
                I have apt programming skills in Python.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>

            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>

              <h3>Java developer</h3>
              <p>
                I have proficient developing skills in Java.
              </p>
            </div>
          </li>
        </ul></div>
    </section>
  )
}

export default Aboutme
