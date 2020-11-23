if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();

const cards = [
  {
    index: 1,
    type: 'color',
    value: 'red',
    shape: 'heart'
  },
  {
    index: 2,
    type: 'color',
    value: 'orange',
    shape: 'diamond'
  },
  {
    index: 3,
    type: 'color',
    value: 'yellow',
    shape: 'star'
  },
  {
    index: 4,
    type: 'color',
    value: 'green',
    shape: 'triange'
  },
  {
    index: 5,
    type: 'color',
    value: 'blue',
    shape: 'circle'
  },
  {
    index: 6,
    type: 'color',
    value: 'purple',
    shape: 'square'
  },
  {
    index: 7,
    type: 'image',
    value: 'URL',
    shape: 'square'
  },
  {
    index: 8,
    type: 'image',
    value: 'blueberry',
    name: 'blueberry',
    src: '../images/cards/blueberry-card'
  },
  {
    index: 9,
    type: 'image',
    value: 'veruca',
    name: 'veruca',
    src: '../images/cards/veruca-card'
  },
  {
    index: 10,
    type: 'image',
    value: 'mike',
    name: 'mike',
    src: '../images/cards/mike-card'
  },
  {
    index: 11,
    type: 'image',
    value: 'charlie',
    name: 'charlie',
    src: '../images/cards/charlie-card'
  },
  {
    index: 12,
    type: 'image',
    value: 'willy',
    name: 'willy',
    src: '../images/cards/willy-card'
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
