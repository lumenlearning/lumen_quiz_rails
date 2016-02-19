import React from 'react';
import TopBar from './TopBar';

export default class Home extends React.Component {
  render() {
    return (
      <div className="main-container">
        <TopBar 
          location={this.props.location} 
          quiz_id = {this.props.params.quiz_id}
        />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}