import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit, FaTrash, FaUndo, FaCheck } from 'react-icons/fa';

export default function Items({ task, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm({ defaultValues: { editText: task.text } });

  const onUpdate = (data) => {
    dispatch({ type: 'UPDATE', payload: { id: task.id, text: data.editText } });
    setIsEditing(false);
  };

  return (
    <div className={`gallery-item ${task.completed ? 'completed' : ''}`}>
      <div className="gallery-item-title">
        {isEditing ? (
          <form onSubmit={handleSubmit(onUpdate)} className="upload-form" style={{ gap: '6px' }}>
            <div className="form-group" style={{ padding: '0 10px' }}>
              <input type="text" {...register("editText", { required: true })} />
            </div>
            <button type="submit" className="task-submit-btn" style={{ margin: '0 10px', padding: '4px' }}>Save</button>
          </form>
        ) : (
          <span className={`task-text ${task.completed ? 'completed' : ''}`}>
            {task.text} 
            <span className="task-date">({new Date(task.date).toLocaleString()})</span>
          </span>
        )}
      </div>

      <div className="task-actions">
        {/* Complete Action Icon */}
        <button 
          onClick={() => dispatch({ type: 'COMPLETE', payload: task.id })} 
          className="icon-btn"
          title={task.completed ? "Mark Incomplete" : "Mark Complete"}
        >
          {task.completed ? <FaUndo color="#6c757d" size={18} /> : <FaCheck color="#1a8e06" size={18} />}
        </button>

        {/* Update Action Icon */}
        <button onClick={() => setIsEditing(!isEditing)} className="icon-btn" title="Edit Task">
          <FaEdit color="#007bff" size={18} />
        </button>

        {/* Delete Action Icon */}
        <button onClick={() => dispatch({ type: 'DELETE', payload: task.id })} className="icon-btn" title="Delete Task">
          <FaTrash color="#dc3545" size={18} />
        </button>
      </div>
    </div>
  );
}