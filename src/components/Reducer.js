function Reducer(state, action) {
  switch (action.type) {
    case 'LOAD':
      return action.payload;
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(task => task.id !== action.payload);
    case 'COMPLETE':
      return state.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'UPDATE':
      return state.map(task => 
        task.id === action.payload.id 
          ? { ...task, text: action.payload.text, date: new Date().toLocaleString() } // Preserves original creation date
          : task
      );
    default:
      return state;
  }
}

export default Reducer;