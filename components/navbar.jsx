import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import Github from "../public/github.png";
import INsta from "../public/insta.png";
import Fb from "../public/fb.png";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.first_container}>
          <ul>
            <li>Project</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.second_container}>
          <Link href="/">
            <Image src={Logo} alt="navlogo" />{" "}
          </Link>
        </div>

        <div className={styles.third_container}>
          <Link href="https://google.com">
            <Image
              className={styles.socialImg}
              src={Github}
              alt="github logo"
            />{" "}
          </Link>
          <Link href="https://google.com">
            <Image className={styles.socialImg} src={INsta} alt="insta logo" />{" "}
          </Link>
          <Link href="https://google.com">
            <Image className={styles.socialImg} src={Fb} alt="Facebook Logo" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
