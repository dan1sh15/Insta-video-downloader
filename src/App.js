import { Toaster } from 'react-hot-toast';
import './App.css';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

    const [progress, setProgress] = useState(0);

  return (
    <div className='h-[100vh] border-black relative w-[100%] customFont bg-[#7FC7D9]'>
      <Navbar progress={progress} />
      <MainSection setProgress={setProgress} />

      <Toaster />
    </div>
  );
}

export default App;
