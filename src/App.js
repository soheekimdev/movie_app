import React from 'react';

////아래 두 개는 결과가 똑같다.

//첫 번째 방법
function Fruit1(props) {
  return <h2>I like {props.fav}, {props.second}, and {props.third}.</h2>
}

function App1() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Fruit1 fav="strawberry" second="korean melon" third="banana" />
    </div>
  );
}

//두 번째 방법
function Fruit2({ fav, second, third }) {
  return <h2>I like {fav}, {second}, and {third}.</h2>
}

function App2() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Fruit2 fav="strawberry" second="korean melon" third="banana" />
    </div>
  );
}


////컴포넌트 재활용하기
function Fruit3({ fav }) {
  return <h2>I like {fav}.</h2>
}

function App3() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Fruit3 fav="strawberry" />
      <Fruit3 fav="korean melon" />
      <Fruit3 fav="banana" />
    </div>
  );
}


export default App3;