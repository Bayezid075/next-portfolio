import styles from "./banner.module.css";
import React from "react";
import Image from "next/image";
import myImg from "../public/image.png";
import nextLogo from "../public/next.png";
import jsLogo from "../public/js.png";
import sassLogo from "../public/sass.png";
import reactLogo from "../public/react.png";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.first_container}>
        <Image src={myImg} />
      </div>
      <div className={styles.second_container}>
        <h1> Frontend Developer</h1>
        <div className={styles.img_container}>
          <Image src={nextLogo} alt="next logo" />
          <Image src={sassLogo} alt="sass logo" />
          <Image style={{ marginTop: "-10px" }} src={jsLogo} alt="js logo" />
          <Image src={reactLogo} alt="react logo" />
        </div>
        <div className={styles.txt_container}>
          Frontend Creation Is An Art. People Call Me Artist. I don’t know why
          They Call Me like That But I have very good knowledge of JAVASCIPT,
          REACTJS, NEXTJS, REDUX, SASS, And CSS.
        </div>
      </div>
    </div>
  );
}
