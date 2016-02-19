import React from 'react';
import TopBar from './TopBar';

export default class Home extends React.Component {
  render() {
    return (
      <div className="main-container">
        <TopBar location={this.props.location} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}