import { useReducer, useEffect } from 'react';
import Form from './components/Form';
import Items from './components/Items';
import Reducer from './components/Reducer';

export default function App() {
  const [tasks, dispatch] = useReducer(Reducer, [], () => {
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="task-container">
      <h1>Task Manager Dashboard</h1>
      
      <Form dispatch={dispatch} />

      <section className="gallery-section">
        <div className="gallery-grid">
          {tasks.map(task => (
            <Items 
              key={task.id} 
              task={task} 
              dispatch={dispatch} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}