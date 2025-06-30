'use client';

import { useState } from 'react';
import styles from './Plans.module.scss';
import InputField from '../inputfield/InputField';
import AddButton from '../buttons/addbutton/AddButton';

export default () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(['leqciaa dasamatebeli', 'algoritmia dasamatebeli']);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onAdd = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <>
    <div className={styles.inputContainer}>
      <InputField value={task} onChange={onChange} />
      <AddButton onAdd={onAdd} />
    </div>
      
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </>
  );
};