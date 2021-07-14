import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
      history.push("/");  //go back home
    }
  }

  render() {
    return (
      <span>Hello</span>
    )
  }
}

export default Detail;