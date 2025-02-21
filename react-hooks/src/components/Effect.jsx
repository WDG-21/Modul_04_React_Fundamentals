import { useEffect, useState } from 'react';

function Effect() {
  const [name, setName] = useState('');

  // every single useEffect always fires on first render

  useEffect(() => {
    console.log('every render');
  });

  // on first render
  useEffect(() => {
    console.log('the component has been mounted');
    // localStorage.getItem('something')
  }, []);

  useEffect(() => {
    console.log('state changed');
  }, [name]);

  return (
    <div>
      <h2>useEffect</h2>
      <input
        value={name}
        placeholder='type something'
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Effect;
