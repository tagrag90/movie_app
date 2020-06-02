import React from 'react';
import PropTypes from 'prop-types';
// import Movie from './Movie';
// import Food from './Food';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://ohyena.files.wordpress.com/2015/02/ec8aa4ed81aceba6b0ec83b7-2015-02-23-21-38-58.png',
    rating: 4,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://ohyena.files.wordpress.com/2015/02/ec8aa4ed81aceba6b0ec83b7-2015-02-23-21-38-58.png',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://ohyena.files.wordpress.com/2015/02/ec8aa4ed81aceba6b0ec83b7-2015-02-23-21-38-58.png',
    rating: 3.4,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://ohyena.files.wordpress.com/2015/02/ec8aa4ed81aceba6b0ec83b7-2015-02-23-21-38-58.png',
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://ohyena.files.wordpress.com/2015/02/ec8aa4ed81aceba6b0ec83b7-2015-02-23-21-38-58.png',
    rating: 5,
  },

];



function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};


export default App;
