import React from 'react';
import classes from './ParaCard.css'
export default class ParaCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p> {this.props.content} </p>
      </div>
    );
  }
}
