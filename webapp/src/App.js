import React from 'react';
import { useState } from 'react';
import './App.css';

import ApolloQuery from './ApolloQuery';

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
      <div>
        <h3>Basic query from GraphQL:</h3>
        <ApolloQuery />
      </div>
      <div>
        <h3>Count characters via rest</h3>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input type="submit" value="Count" onClick={e => handleSubmit(e)} />
        <p>char count: {count}</p>
      </div>
    </div>
  );
}

export default App;
