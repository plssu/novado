'use client';

import React from 'react';
import styles from './AddTodoForm.module.scss';
import AddButton from '../buttons/addbutton/AddButton';
import InputField from '../inputfield/InputField';

interface AddTodoFormProps {
  input: string;
  onInputChange: (value: string) => void;
  onAdd: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export default function AddTodoForm({ input, onInputChange, onAdd }: AddTodoFormProps) {
  return (
    <form onSubmit={onAdd} className={styles.addTodoForm}>
        <InputField value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value)} />
        <div>
            <AddButton onAdd={() => {}} />
        </div>
    </form>
  );
}
