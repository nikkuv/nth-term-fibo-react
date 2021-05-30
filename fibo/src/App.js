import './index.css';
import {React, useState} from 'react';
import { FaGithub } from "react-icons/fa";

function fibo(num){
  let a = 0n, b = 1n, c, i;
  if(num === 0)
      return a;
  for(i = 2; i <= num; i++)
  {
      c = a + b;
      a = b;
      b = c;
  }
  return b;
}

function App() {

  const [result, setResult] = useState('');
  const [number, setNumber] = useState();

  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div className='min-w-scrren m-auto'>
      <header className='w-full h-16'>
        <nav className='flex items-center justify-between p-4 bg-gray-100'>
          <div>
            <a href='https://www.mlpro.io/'>
            <h3 className='text-black text-sm md:text-xl font-semibold'>MLpro.<span className='text-primary'>io</span></h3></a>
          </div>
          <div>
              <FaGithub size = "1.5rem" style = {{ margin: ".5rem", display:"inline"}} />
              <a className='text-sm md:text-base' href='https://github.com/nikkuv/nth-term-fibo-react'>Github Repo</a>
          </div>
        </nav>

        <div className='md:max-w-xl m-auto py-8'>
          <h1 className='text-black font-bold text-2xl font-poppins md:text-5xl text-center m-4 md:leading-snug'>
            Find the nth term in a <span className='text-primary'>Fibonacci</span> sequence  
          </h1>
          <p className='text-black px-3 font-poppins text-center'>Put the nth term in the input box  below 👇 to get the result</p>
        </div>
        
        <div className='md:max-w-2xl m-auto md:flex'>
          <div className='m-3'>
            <input placeholder='Input a value...' className='p-3 w-full md:w-96 bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary
            focus:border-transparent rounded-md'
            onChange={handleChange}></input>
          </div>
          <div className='m-3'>
            <button className='bg-primary p-3 w-full md:w-44 text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary
            focus:ring-opacity-50 rounded-md' 
            onClick = {() => setResult(fibo(number).toString())}>Calculate</button>
          </div>
        </div>
        <div className='md:max-w-4xl py-6 m-auto'>
            <h3 className='text-black text-center'>The nth fibonacci no is:</h3>
            <div className='w-full p-2 '>
              <p className='text-black text-center break-words'>{result}</p>
            </div> 
        </div>  
      </header>  
    </div>
  );
}

export default App;
