import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, [count]); // This array tells React to re-run the effect when `count` changes

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a JSX example.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
