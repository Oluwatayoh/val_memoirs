import React from 'react';
import '../../css/MainContent.scss';

const Img = props => (
  <div className="img_container">
    <img src={props.url} alt=""/>
  </div>
);

export default Img;