'use client';

import styles from './InputField.module.scss';
import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  return (
  <div className={styles.inputText}>
    <input className={styles.inputField} value={value} onChange={onChange} placeholder='ცხოვრების რა ნაწილის დააგეგმვა გსურს?' />
  </div>
  );
};

export default InputField;