import { useState } from 'react';

function AddTodo({ addToDo }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) {
      alert('Please enter your todo');
      return;
    }
    addToDo(input);
    setInput('');
  };

  return (
    <div className='flex space-x-2'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a new todo'
        className='border p-2 rounded w-80'
      />
      <button
        onClick={handleAdd}
        className='bg-blue-500 text-white px-4 hover:bg-blue-600 rounded'
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
