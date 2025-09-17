import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '`~!@#$%^^&*()_+-=[]{}\|;:';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-xl font-bold my-4">Password Generator</h1>

       
        <div className="flex items-center shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-2 px-3 text-orange-500 bg-white"
            placeholder="password"
            readOnly
          />
          <button
            onClick={() => {
              if (Password) {
                navigator.clipboard.writeText(Password);
                alert('Password Copied!');
              }
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2"
          >
            copy
          </button>
        </div>

       
        <div className="flex flex-col mb-4">
          <label className="mb-1">Length: {length}</label>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            <label>Include Numbers</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
            />
            <label>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
