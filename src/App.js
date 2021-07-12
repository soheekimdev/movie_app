import React from 'react';
import propTypes from 'prop-types';

const fruitILike = [
  {
    id: 1,
    name: "strawberry",
    image: "https://cdn.imweb.me/upload/S201804055ac60211e0c1d/09110318634f5.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "korean melon",
    image: "https://image.hmall.com/static/2/0/60/24/2124600238_0.jpg?RS=600x600&AR=0",
    rating: 4.5,
  },
  {
    id: 3,
    name: "banana",
    image: "https://health.chosun.com/site/data/img_dir/2021/01/27/2021012700739_0.jpg",
  },
]

function Fruit({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name} />
  </div>
}

Fruit.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number,
}

function App() {
  return (
    <div>
      {fruitILike.map(fruit => (
        <Fruit key={fruit.id} name={fruit.name} picture={fruit.image} rating={fruit.rating} />
      ))}
    </div>
  );
}

export default App;