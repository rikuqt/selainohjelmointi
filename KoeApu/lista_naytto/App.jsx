import React from 'react';
import myList from './Main';  // Tuo oletuksena viety lista

function App() {
  return (
    <div>
      <h1>List Items</h1>
      <ul>
        {myList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
