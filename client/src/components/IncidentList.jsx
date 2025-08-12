import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/incidents');
        setIncidents(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching incidents:', err.message);
        setError('Failed to fetch incidents. Please try again later.');
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this incident?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/incidents/${id}`);
      setIncidents(incidents.filter((incident) => incident._id !== id)); // Update UI
      alert('Incident deleted successfully!');
    } catch (err) {
      console.error('Error deleting incident:', err.message);
      alert('Failed to delete incident. Please try again.');
    }
  };

  if (loading) return <p>Loading incidents...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg py-8">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Reported Incidents</h2>
      {incidents.length === 0 ? (
        <p className="text-center text-gray-500">No incidents reported yet.</p>
      ) : (
        <ul className="space-y-4">
          {incidents.map((incident) => (
            <li
              key={incident._id}
              className="p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-gray-800">{incident.title}</h3>
              <p className="text-gray-600 mt-2"><strong>Description:</strong> {incident.description}</p>
              <p className="text-gray-600 mt-1"><strong>Location:</strong> {incident.location}</p>
              <p className="text-gray-600 mt-1"><strong>Reported By:</strong> {incident.reportedBy}</p>
              <p className="text-gray-600 mt-1"><strong>Contact Number:</strong> {incident.contactNumber}</p>
              <p className="text-gray-500 text-sm mt-2">
                <strong>Reported At:</strong> {new Date(incident.reportedAt).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(incident._id)}
                className="mt-4 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IncidentList;
