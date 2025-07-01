  'use client';

  import { useState } from 'react';
  import styles from './Plans.module.scss';
  import InputField from '../inputfield/InputField';
  import AddButton from '../buttons/addbutton/AddButton';
  import Task from '../task/Task';
  import WithoutPTask from '../withoutTask/WithoutPTask';

  type TaskItem = {
    text: string;
    checked: boolean;
  };

  export default () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<TaskItem[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTask(e.target.value);
    };

    const onAdd = () => {
      if (task.trim() === '') return;
      setTasks([...tasks, { text: task, checked: false }]);
      setTask('');
    };

    const onCheck = (index: number) => {
      setTasks(tasks =>
        tasks.map((t, i) =>
          i === index ? { ...t, checked: !t.checked } : t
        )
      );
    };

    return (
      <>
        <div className={styles.inputContainer}>
          <InputField value={task} onChange={onChange} />
          <AddButton onAdd={onAdd} />
        </div>
        {tasks.length === 0 ? (
          <p className={styles.emptyText}><WithoutPTask /></p>
        ) : (
          <div className={styles.taskList}>
            {tasks.map((task, i) => (
              <li className={styles.task} key={i}>
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => onCheck(i)}
                />
                <Task text={task.text} />
              </li>
            ))}
          </div>
        )}
      </>
    );
  }