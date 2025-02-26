import { AiOutlineCheck, AiOutlineDelete, AiOutlineUndo } from 'react-icons/ai';

function TodoItem({ todo, index, toggleDone, deleteTodo }) {
  return (
    <li className='flex justify-between items-center bg-white p-2 shadow-md rounded-lg mb-2'>
      <span className={`${todo.done ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>

      <div className='flex gap-2'>
        <button
          onClick={() => toggleDone(index)}
          className={`px-2 py-1 flex items-center text-white rounded ${
            todo.done ? 'bg-red-300' : 'bg-green-500'
          }`}
        >
          {todo.done ? (
            <AiOutlineUndo size={18} />
          ) : (
            <AiOutlineCheck size={18} />
          )}
        </button>

        <button
          onClick={() => deleteTodo(index)}
          className='bg-red-500 text-white px-2 rounded flex items-center'
        >
          <AiOutlineDelete size={18} />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
