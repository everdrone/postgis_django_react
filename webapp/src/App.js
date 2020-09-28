import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:8000/char_count?text=${text}`)
      .then(response => response.json())
      .then(data => {
        setCount(data.count);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <input type="submit" value="Count" onClick={e => handleSubmit(e)} />
      <h3>char count: {count}</h3>
    </div>
  );
}

export default App;
