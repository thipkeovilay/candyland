if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();

const cards = [
  {
    id: 0,
    type: 'color',
    value: 'red',
    name: 'heart',
    src: '../images/cards/heart-card'
  },
  {
    id: 1,
    type: 'color',
    value: 'orange',
    name: 'diamond',
    src: '../images/cards/diamond-card'
  },
  {
    id: 2,
    type: 'color',
    value: 'yellow',
    name: 'star',
    src: '../images/cards/star-card'
  },
  {
    id: 3,
    type: 'color',
    value: 'green',
    name: 'triangle',
    src: '../images/cards/triangle-card'
  },
  {
    id: 4,
    type: 'color',
    value: 'blue',
    name: 'circle',
    src: '../images/cards/circle-card'
  },
  {
    id: 5,
    type: 'color',
    value: 'purple',
    name: 'square',
    src: '../images/cards/square-card'
  },
  {
    id: 6,
    type: 'image',
    value: 'agustus',
    name: 'agustus',
    src: '../images/cards/agustus-card'
  },
  {
    id: 7,
    type: 'image',
    value: 'blueberry',
    name: 'blueberry',
    src: '../images/cards/blueberry-card'
  },
  {
    id: 8,
    type: 'image',
    value: 'veruca',
    name: 'veruca',
    src: '../images/cards/veruca-card'
  },
  {
    id: 9,
    type: 'image',
    value: 'mike',
    name: 'mike',
    src: '../images/cards/mike-card'
  },
  {
    id: 10,
    type: 'image',
    value: 'charlie',
    name: 'charlie',
    src: '../images/cards/charlie-card'
  },
  {
    id: 11,
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
