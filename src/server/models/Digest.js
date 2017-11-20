const mongoose = require('mongoose');
const DigestSubSchema = require('./DigestSub');

const DigestSchema = new mongoose.Schema({
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
  },
  sub: {
    type: [DigestSubSchema],
    required: false
  }
});

let Digest = mongoose.model('Digest', DigestSchema);
