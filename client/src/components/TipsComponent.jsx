import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TipsComponent = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Make an API request to the backend (Assuming it's running on localhost:5000)
      axios.get('http://localhost:5000/api/test')  // Replace with your backend endpoint
        .then(response => {
          setData(response.data);  // Store the response data
        })
        .catch(err => {
          setError(err);  // Handle errors (if any)
          console.log('Error:', err);
        });
    }, []);
  
    return (
      <div className="my-12">
        {error && <p>Error: {error.message}</p>}
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </div>
    );
  };

export default TipsComponent;
