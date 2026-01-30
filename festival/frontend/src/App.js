import React, { useEffect, useState } from "react";

function App() {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    fetch("http://13.220.125.164:5000/api/festivals")  // backend API
      .then(response => response.json())
      .then(data => setFestivals(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top 10 Indian Festivals</h1>
      <ul>
        {festivals.map((festival, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{festival.name}</strong> ({festival.date}): {festival.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

