import React from 'react'
import { useEffect } from 'react'

function App() {

  useEffect (() => {
    async function getTodos () {
      const response = await fetch("http://localhost:5000/api/list")
      const data = await response.json()
      console.log(data)
    }
    getTodos()
  }, []);

  return (
    <div className="App">Howdy</div>
  );
}

export default App;
