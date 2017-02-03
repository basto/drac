import React from 'react';
import classes from './TitleCard.css'
export default class TitleCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3> {this.props.content} </h3>
      </div>
    );
  }
}
