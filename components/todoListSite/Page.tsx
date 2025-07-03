'use client';

import AddTodoForm from '@/components/addTodoForm/AddTodoForm';
import Novado from '@/components/novado/Novado';
import TodoList from '@/components/todoList/TodoList';
import { useState } from 'react';
import styles from './Page.module.scss';

interface Todo {
  text: string;
  completed: boolean;
}

export default () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos([...todos, { text: trimmed, completed: false }]);
    setInput('');
  };

  const toggleTodo = (index: number) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  
  const totalCount = todos.length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <>
        <div>
            <Novado />
            <AddTodoForm input={input} onInputChange={setInput} onAdd={addTodo} />
        <div className={styles.header}>
            <p className={styles.headerdav}>დავალებები <p className={styles.num}>{totalCount}</p></p>
            <p className={styles.headerShes}>შესრულებული <p className={styles.num}>{completedCount}/{totalCount}</p></p>
        </div>
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo} />
        </div>
    </>
  );
}
