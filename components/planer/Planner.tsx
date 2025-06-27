'use client';

import { useState } from 'react';
import styles from './Planner.module.css';
import Button from '../button/Button';

export default () => {

const [task, setTask] = useState('');
const [tasks, setTasks] = useState(['sss', 'sss2', 'sss3']);


const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
};

const onAdd = () => {
    setTasks([...tasks, task]);
    setTask('');
}; 

return (
    <>
    <input
        type="text"
        value={task}
        onChange={onChange}
        className={styles.inputTextPlanner}
    />
    <button onClick={onAdd} className={styles.addButton}>დამატება<Button /></button>
    <ul>
        {
            tasks.map(task => <li>{task}</li>)
        }
    </ul>  
    </>
    );
};