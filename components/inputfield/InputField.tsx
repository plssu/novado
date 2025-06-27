'use client';

import React from 'react';
import styles from './InputField.module.css';

type InputFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({ value, onChange }: InputFieldProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.inputText}
      placeholder="შეიყვანე დავალება"
    />
  );
}
