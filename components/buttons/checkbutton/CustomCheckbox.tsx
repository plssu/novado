'use client';

import React from 'react';
import styles from './CustomCheckbox.module.scss';

interface Props {
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox = ({ checked, onChange }: Props) => {
  return (
    <>
      <label className={styles.wrapper}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.hiddenCheckbox}
        />
        <span className={styles.circleCheckbox}></span>
      </label>
    </>
  );
};

export default CustomCheckbox;