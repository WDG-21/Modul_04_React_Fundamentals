import { useState } from 'react';
import LightBulb from './components/Lightbulb';

function App() {
  const [light, setLight] = useState(false);

  // console.log(light);

  return (
    <div>
      <button onClick={() => setLight((prev) => !prev)}>
        {light ? 'TURN OFF' : 'TURN ON'}
      </button>
      <LightBulb light={light} />
    </div>
  );
}

export default App;
