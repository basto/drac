import React from 'react';
import TitleCard from '../cards/TitleCard';
import ImageCard from '../cards/ImageCard';
import ParaCard from '../cards/ParaCard';
import classes from './CardContainer.css'
export default class App extends React.Component {
  render() {
    return (
      <div id="card1" >
        <TitleCard content="Dracula" />
        <ImageCard content="images/intereset2.png"/>
        <ParaCard content="[QA]: Worked with Jenkins to create and maintain automation frameworks. Also, Built a framework for visualizing JIRA data for the QA team." />
      </div>
    );
  }
}
