const express = require('express');
const data = require("./data");
const classes = require("./Classes");
const router = express.Router();

// Define routes
router.get('/api/banks', (req, res) => {
  
  res.send('List of banks');
});

router.post('/api/po_in', (req, res) => {

  res.send();
})

router.get('/api/po_out', (req, res) => {
  res.send('List of users');
});

router.post('/api/ack_in', (req, res) => {

  res.send();
})

router.get('/api/ack_out', (req, res) => {
  res.send('List of users');
});

/*
router.get('/users', (req, res) => {
  res.send('List of users');
});

router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Details of user ${userId}`);
});

router.post('/users', (req, res) => {
  res.send('Create a new user');
});

router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Update user ${userId}`);
});

router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user ${userId}`);
});

module.exports = router;*/