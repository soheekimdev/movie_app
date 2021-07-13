import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}


export default App;

// 리액트 실행 순서
// 1. App render
// 2. isLoading: true
// 3. isLoading ? "Loading..." : "We are ready"
// 4. Application이 Mount된 후(componentDidMount), getMovies 함수 호출
// 5. getMovies는 axios.get을 사용. 하지만 axios.get은 완료되기까지 시간이 조금 필요하기 때문에 await를 넣었음
