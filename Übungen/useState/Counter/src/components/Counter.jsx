function Counter({ count, setCount }) {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}

export default Counter;
