import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  // render() {
  //   return <div>{this.state.isLoading ? "Loading..." : "We are ready"}</div>;
  // }

  //위와 아래는 결과가 같음

  render() {
    const { isLoading } = this.state;  //Get me isLoading from the state.
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}


export default App;