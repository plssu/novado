'use client';

import React from 'react';
import DeleteButton from '../buttons/delete button/DeleteButton';
import CustomCheckbox from '../buttons/checkbutton/CustomCheckbox';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      <div>
        <CustomCheckbox onClick={onToggle} checked={todo.completed} />
        <span>
          {todo.text}
        </span>
      </div>
      <DeleteButton onClick={onDelete} />
    </li>
  );
}
