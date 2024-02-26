import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Display } from "react-7-segment-display"; // Import the Display component
import '../App.css';

function MonitorPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:5000/api/data')
      .then((res) => {
        setData(res.data); // Update the data state with the response data
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{display: "flex" , flexWrap: "wrap" , justifyContent: "center"}}>
      {data.map((item, index, label) => (
        <div>
          <div key={index}>
      <Display value={item.value} color='black' height={150} skew="true" />
     
          </div>
          <p style={{ textAlign: "center" , fontSize: "35px"}}>{item.label}</p>
        </div>
    
    
     
  ))}
</div>

  );
}

export default MonitorPage;
