'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Novado from "@/components/novado/Novado";
import InputField from "@/components/inputfield/InputField";
import Planner from "@/components/planer/Planner";

export default function Home() {
  return (
    <>

    <div className={styles.logo}>
      <Novado />
    </div>

    <div className={styles.planer}>
      <Planner />
    </div>

    </>
  );
}
