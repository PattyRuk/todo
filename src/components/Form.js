import { useForm } from 'react-hook-form';

export default function Form({ dispatch }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const newTask = {
      id: Date.now(),
      text: data.taskText,
      completed: false,
      date: new Date().toLocaleString()
    };
    dispatch({ type: 'ADD', payload: newTask });
    reset();
  };

  return (
    <div className="upload-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="upload-form">
        <h3>Create New Task</h3>
        <div className="form-group">
          <input 
            type="text"
            {...register("taskText", { required: "Task description is required" })} 
            placeholder="What needs to be done?" 
          />
          {errors.taskText && <p className="task-error-msg">{errors.taskText.message}</p>}
        </div>
        <button type="submit" className="task-submit-btn">Add Task</button>
      </form>
    </div>
  );
}