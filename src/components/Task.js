import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskCompletion, deleteTask, updateTask } from '../features/tasks/tasksSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTask({ id: task.id, title, description }));
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTaskCompletion(task.id))}
      />
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <div className="button-group edit-form-buttons">
            <button onClick={handleUpdate} className="save-button">Save</button>
            <button onClick={() => setIsEditing(false)} className="cancel-button">Cancel</button>
          </div>
        </div>
      ) : (
        <span className="task-text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}: {task.description}
        </span>
      )}
      <div className="button-group">
        <button onClick={() => setIsEditing(!isEditing)} className="edit-button button-spacing">
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))} className="delete-button button-spacing">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
