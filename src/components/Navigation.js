import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to={{
        pathname: "/about",
        state: {
          fromNavigation: true  //브라우저 console 창에서 props 중 location > state > fromNavigation: true가 추가된 걸 확인할 수 있음.
        }
      }}>About</Link>
    </div>
  )
}

export default Navigation;