import React from 'react';
import AddTask from '../../components/AddTask';
import TaskList from '../../components/TaskList';
import Filter from '../../components/Filter';

const Tasks = () => {
  return (
    <div>
      <AddTask />
      <Filter />
      <TaskList />
    </div>
  );
};

export default Tasks;
