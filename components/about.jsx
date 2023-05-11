import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import man from "../public/man.png";
import down from "../public/down.png";

export default function about() {
  return (
    <div className={styles.container}>
      <div className={styles.img_sec}>
        <div className={styles.img_container}>
          <Image src={man} alt="avater" />
        </div>
        <div className={styles.btn_container}>
          Download
          <Image
            style={{ marginTop: "-2px", marginLeft: "20px" }}
            src={down}
            alt="download"
          />
        </div>
      </div>
      <div className={styles.text_sec}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing.
      </div>
    </div>
  );
}
