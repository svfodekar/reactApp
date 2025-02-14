import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let result = {}
    const fetchData = async () => {
      try {
        let response = await fetch('/api/orders');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        result = await response.json();
      } catch (error) {
        result = dummy;
      } finally {
        setData(result);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderTable = () => {
    if (loading) {
      return <p>Loading data...</p>;
    }

    if (error) {
      return <p>Error fetching data: {error}</p>;
    }

    if (data.length === 0) {
      return <p>No data available.</p>;
    }

    const columns = Object.keys(data[0]);

    return (
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">Shoppy</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#orders">Orders</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="table-container">
        {renderTable()}
      </div>
    </div>
  );
}

const dummy = [
  {
    "Order ID": 1,
    "Order Item": "Laptop",
    "Date": "2023-10-01"
  },
  {
    "Order ID": 2,
    "Order Item": "Smartphone",
    "Date": "2023-10-02"
  },
  {
    "Order ID": 3,
    "Order Item": "Headphones",
    "Date": "2023-10-03"
  },
  {
    "Order ID": 4,
    "Order Item": "Tablet",
    "Date": "2023-10-04"
  }]

export default App;
