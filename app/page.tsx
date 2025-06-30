  'use client';

import InputField from "@/components/inputfield/InputField";
import styles from "./page.module.css";
import Novado from "@/components/novado/Novado";
import AddButton from "@/components/buttons/addbutton/AddButton";
import Plans from "@/components/plan/Plans";

export default function Home() {
  return (
    <>

    <div className={styles.logo}>
      <Novado />
    </div>

    <div className={styles.inputContainer}>
      <div>
        <Plans />
      </div>
      <div>
        
      </div>

    </div>

    </>
  );
}
