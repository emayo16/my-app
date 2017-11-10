const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const recipe = require('../models/Recipe');

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
    if (err) return console.log(err);

    closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', (req, res) => {
  connection((db) => {
      db.collection('users')
        .find()
        .toArray()
        .then((users) => {
        response.data = users;
      res.json(response);
    })
    .catch((err) => {
        sendError(err, res);
    });
  });
});

// Get users
router.get('/recipes', (req, res) => {
  connection((db) => {
    db.collection('recipes')
      .find()
      .toArray()
      .then((recipes) => {
        response.data = recipes;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

module.exports = router;