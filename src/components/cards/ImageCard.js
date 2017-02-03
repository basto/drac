import React from 'react';
import classes from './ImageCard.css'
export default class ImageCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img src={this.props.content} />
      </div>
    );
  }
}
