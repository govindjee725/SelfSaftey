// models/Incident.js
const mongoose = require('mongoose');
const { Number } = require('twilio/lib/twiml/VoiceResponse');

const IncidentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  reportedBy: { type: String, required: true },
  contactNumber:{type:Number,required:true},
  reportedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Incident', IncidentSchema);
