import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompletion } from '../features/tasks/tasksSlice';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => {
    const { tasks, filter } = state.tasks;
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    } else if (filter === 'incomplete') {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  });
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => dispatch(toggleTaskCompletion(task.id))}
        />
      ))}
    </ul>
  );
};

export default TaskList;
