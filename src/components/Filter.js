import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/tasks/tasksSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter('all'))}
        className={`${filter === 'all' ? 'active' : ''} button-spacing`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        className={`${filter === 'completed' ? 'active' : ''} button-spacing`}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(setFilter('incomplete'))}
        className={`${filter === 'incomplete' ? 'active' : ''} button-spacing`}
      >
        Incomplete
      </button>
    </div>
  );
};

export default Filter;
