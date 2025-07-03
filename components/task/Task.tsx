'use client';

import React from 'react';
import styles from './Task.module.scss';
import DeleteButton from '../buttons/delete button/DeleteButton';
import CustomCheckbox from '../buttons/checkbutton/CustomCheckbox';

interface TaskProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export default function Task({ text, completed, onToggle, onDelete }: TaskProps) {
  return (
    <p className={styles.taskContainer}>
      <div className={styles.task}>
        <div className={styles.taskText}>
          <CustomCheckbox checked={completed} onChange={onToggle} />
          <span className={completed ? styles.done : ''}>{text}</span>
        </div>
        <DeleteButton onClick={onDelete} />
      </div>
    </p>
  );
}
