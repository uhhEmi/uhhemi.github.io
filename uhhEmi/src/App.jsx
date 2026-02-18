import { useState } from 'react';
import AnimatedBG from './components/AnimatedBG';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen">
      <AnimatedBG />
    </div>
  );
}

export default App;
