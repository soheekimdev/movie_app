import React from 'react';

function Fruit({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const fruitILike = [
  {
    name: "strawberry",
    image: "https://cdn.imweb.me/upload/S201804055ac60211e0c1d/09110318634f5.jpeg"
  },
  {
    name: "korean melon",
    image: "https://image.hmall.com/static/2/0/60/24/2124600238_0.jpg?RS=600x600&AR=0"
  },
  {
    name: "banana",
    image: "https://health.chosun.com/site/data/img_dir/2021/01/27/2021012700739_0.jpg"
  },
]

function App() {
  return (
    <div className="App">
      {fruitILike.map(fruit => (
        <Fruit name={fruit.name} picture={fruit.image} />
      ))}
    </div>
  );
}


export default App;