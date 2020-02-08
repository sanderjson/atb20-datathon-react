import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/hello");
      console.log(response);

      setResults(response);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>This is the header</h1>
      {loading ? <div>Loading Results ...</div> : <div>{results}</div>}
      {error && <div>{error.message}</div>}
    </div>
  );
}
