const mongoose = require('mongoose');

const DigestSubSchema = new mongoose.Schema({
  label: {
    type: String,
    required: false
  },
  tag: {
    type: String,
    required: false
  },
  schemaOrgTag: {
    type: String,
    required: false
  },
  total: {
    type: Number,
    required: false
  },
  hasRDI: {
    type: Boolean,
    required: false
  },
  daily: {
    type: Number,
    required: false
  },
  unit: {
    type: String,
    required: false
  }
});

let DigestSub = mongoose.model('DigestSub', DigestSubSchema);
