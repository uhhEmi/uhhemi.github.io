import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
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
