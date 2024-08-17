import React from 'react'
import styles from './hero.module.css'
import { getImageUrl } from "../../utils.js";

export const Hero = () => {
  return (
    <section className={styles.container}>
<div className={styles.content}>
    <h1 className={styles.title}>Hi,<br/> I'm Purnima Vats</h1>
    <p className={styles.description}>Frontend Developer | Crafting beautiful and responsive UIs with React.js.
         <br/>Reach out if you'd like to learn more!</p>
<a href="mailto:purnimavats0@gmail.com" className={styles.contactBtn}>Contact Me</a>
</div>
<img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"
        className={styles.heroImg}/>
    <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

