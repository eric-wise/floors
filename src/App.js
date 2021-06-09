import React, { useState } from "react";

import "./App.css";

function App() {
  const [timePerTicket, SetTimePerTicket] = useState(0);
  const [floor1, setFloor1] = useState(0);
  const [floor2, setFloor2] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div>Total Time {Number(floor1) + Number(floor2)}</div>
      <form className="form-inline justify-content-center m-2">
        <input
          value={floor1}
          onChange={(e) => setFloor1(e.target.value)}
          type="text"
          placeholder="Floor1"
          className="form-control"
        />
        <input
          value={floor2}
          onChange={(e) => setFloor2(e.target.value)}
          type="text"
          placeholder="Floor2"
          className="form-control"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary mx-2"
        >
          Go
        </button>
      </form>
    </div>
  );
}

export default App;
