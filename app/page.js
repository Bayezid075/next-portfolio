import React from "react";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import styles from "./page.module.css";
import Projects from "@/components/projects";
import About from "@/components/about";

export default function page() {
  return (
    <div>
      <Navbar />
      <Banner />
      <h1 className={styles.title}> Projects</h1>
      <Projects />
      <h1 className={styles.about_title}> About </h1>
      <About />
    </div>
  );
}
