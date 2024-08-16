import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskCompletion} from '../features/tasks/tasksSlice';

const Task = ({ task }) => {
  
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  

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
    </li>
  );
};

export default Task;
