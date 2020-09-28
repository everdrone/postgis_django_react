import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:8000/char_count?text=${text}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <input type="submit" value="Submit" onClick={e => handleSubmit(e)} />
    </div>
  );
}

export default App;
