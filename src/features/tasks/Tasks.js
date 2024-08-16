import React from 'react';
import AddTask from '../../components/AddTask';
import Filter from '../../components/Filter';
import TaskList from '../../components/TaskList';

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
