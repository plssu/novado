'use client';

import { useState } from 'react';
import styles from './Planner.module.css';
import Button from '../button/Button';
import DeleteButton from '../buttons/delete button/DeleteButton';
import CheckBtn from '../buttons/checkbutton/CheckBtn';

export default () => {

const [task, setTask] = useState('');
const [tasks, setTasks] = useState(['დავალება 1', 'დავალება 2']);


const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
};

const onAdd = () => {
    setTasks([...tasks, task]);
    setTask('');
}; 

return (
    <>
     <div className={styles.container}>
        <div className={styles.inputContainer}>
            <input
            type="text"
            value={task}
            placeholder='ცხოვრების რა ნაწილის დაგეგმვა გსურს? '
            onChange={onChange}
            className={styles.inputTextPlanner}
        />
        <button onClick={onAdd} className={styles.addButton}>დამატება<Button /></button>
        </div>
        <div className={styles.taskContainer}>
            <div className={styles.mainTitle}>
                <h3 className={styles.taskMainTitle}><h1 className={styles.firstMainTitle}>დავალება</h1><span className={styles.scndMainTitle}>{tasks.length}</span></h3>
                <p className={styles.taskDescription}>დასრულებული</p>
            </div>
            <ul className={styles.taskList}>
                {tasks.map((task, index) => (
                    <li className={styles.tasks}>
                        <div className={styles.taskItem}>
                            <CheckBtn key={index} />
                            <span>{task}</span>
                        </div>
                        <DeleteButton />
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>
    );
};