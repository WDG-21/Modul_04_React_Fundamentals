import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function Todos() {
  const [todos, setTodos] = useState([]);

  // LocalStorage part => load todos on first render
  //   useEffect(() => {
  //     const savedTodos = JSON.parse(localStorage.getItem('todos') || []);
  //     setTodos(savedTodos);
  //   }, []);

  // save todos to localStorage, when they change
  //   useEffect(() => {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }, [todos]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      localStorage.removeItem('todos');
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      localStorage.removeItem('todos');
    }
  }, [todos]);

  // Function to add toDo
  const addToDo = (newToDo) => {
    setTodos([...todos, { text: newToDo, done: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((el, i) => i !== index));
  };

  const toggleDone = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className='min-h-screen bg-gray-200 flex flex-col items-center p-6'>
      <h1 className='text-2xl font-bold mb-4'>ToDo App</h1>
      <AddTodo addToDo={addToDo} />
      <ul className='mt-4 w-96'>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
