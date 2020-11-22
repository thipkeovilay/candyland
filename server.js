if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();

const cards = [
  {
    id: 1,
    type: 'color',
    value: 'red',
    shape: 'heart'
  },
  {
    id: 2,
    type: 'color',
    value: 'orange',
    shape: 'diamond'
  },
  {
    id: 3,
    type: 'color',
    value: 'yellow',
    shape: 'star'
  },
  {
    id: 4,
    type: 'color',
    value: 'green',
    shape: 'triange'
  },
  {
    id: 5,
    type: 'color',
    value: 'blue',
    shape: 'circle'
  },
  {
    id: 6,
    type: 'color',
    value: 'purple',
    shape: 'square'
  },
  {
    id: 7,
    type: 'image',
    value: 'URL',
    shape: 'square'
  }
];

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/draw/:id', (request, response) => {
  try {
    const { id } = request.params;
    response.json(cards[id]);
  } catch (e) {
    response.status(500).json({ error: e.toString() });
  }
});
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
