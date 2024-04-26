import axios from "axios";
import Papa from "papaparse";
import React, { useEffect, useState } from "react";
import { Display } from "react-7-segment-display";
import { CSVLink } from "react-csv";
import "../App.css";

function MonitorPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get("http://localhost:5000/api/data")
      .then((res) => {
        setData(res.data); // Update the data state with the response data
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const csvHeaders = [
    { label: "Label", key: "label" },
    { label: "Value", key: "value" },
    // Add more headers as needed
  ];

  const handleDownload = () => {
    const csvData = Papa.unparse(data, { header: true }); // Convert data to CSV format
    const blob = new Blob([csvData], { type: "text/csv" }); // Create blob
    const url = window.URL.createObjectURL(blob); // Create URL for the blob
    const a = document.createElement("a"); // Create <a> element
    a.href = url; // Set href attribute of <a> to the URL
    a.download = "monitor_data.csv"; // Set download attribute to specify the file name
    document.body.appendChild(a); // Append <a> to the body
    a.click(); // Click on the <a>
    window.URL.revokeObjectURL(url); // Release the object URL
    document.body.removeChild(a); // Remove the <a> from the body
  };

  return (
    <>
      <header className="bg-black p-2 flex justify-end border-white border-2 shadow-md">
        <CSVLink
          data={data}
          headers={csvHeaders}
          filename={"monitor_data.csv"}
          className="bg-white text-black p-1 rounded mr-2"
        >
          Export to CSV
        </CSVLink>
        <button
          onClick={handleDownload}
          className="bg-white text-black p-1 rounded ml-2"
        >
          Download CSV
        </button>
      </header>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        className="bg-fuchsia-950 h-screen"
      >
        {data.map((item, index, label) => (
          <div>
            <div key={index}>
              <Display
                value={item.value}
                color="blue"
                height={150}
                skew="true"
              />
            </div>
            <p
              style={{ textAlign: "center", fontSize: "35px", color: "White" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MonitorPage;
