'use client';

import styles from './InputField.module.scss';
import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  return (
    <input className={styles.inputText} value={value} onChange={onChange} placeholder='ცხოვრების რა ნაწილის დააგეგმვა გსურს?' />
  );
};

export default InputField;