'use client';

import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import WithoutTask from '../withoutTask/WithoutTask';
import Task from '../task/Task';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p><WithoutTask /></p>;
  }

  return (
    <ul>
      {todos.map((todo, idx) => (
        <React.Fragment key={idx}>
          <Task
            key={idx}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => onToggle(idx)}
            onDelete={() => onDelete(idx)}
          />
        </React.Fragment>
      ))}
    </ul>
  );
}
