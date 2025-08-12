// routes/incident.js
const express = require('express');
const Incident = require('../models/Incident');

const router = express.Router();

// Create Incident
router.post('/create', async (req, res) => {
  const { title, description, location, reportedBy, contactNumber } = req.body;

  if (!title || !description || !location || !reportedBy || !contactNumber) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const newIncident = new Incident({ title, description, location, reportedBy, contactNumber });
    await newIncident.save();
    res.status(201).json({ success: true, message: 'Incident reported successfully.' });
  } catch (error) {
    console.error('Error saving incident:', error.message);
    res.status(500).json({ success: false, message: 'Failed to report the incident.' });
  }
});

router.get('/', async (req, res) => {
    try {
      const incidents = await Incident.find().sort({ reportedAt: -1 }); // Sort by latest reported
      res.json(incidents);
    } catch (error) {
      console.error('Error fetching incidents:', error.message);
      res.status(500).json({ success: false, message: 'Failed to fetch incidents.' });
    }
  });
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedIncident = await Incident.findByIdAndDelete(id);
  
      if (!deletedIncident) {
        return res.status(404).json({ success: false, message: 'Incident not found.' });
      }
  
      res.json({ success: true, message: 'Incident deleted successfully.' });
    } catch (error) {
      console.error('Error deleting incident:', error.message);
      res.status(500).json({ success: false, message: 'Failed to delete incident.' });
    }
  });

module.exports = router;
