import React from 'react';
import '../css/MainContent.scss';
import ImageShow from './ImageShow'
import StoryBoard from './StoryBoard';


function MainContent() {
    return (
        <div className="main-content-wrap">
            <ImageShow className="imageShow" />
            <StoryBoard className="storyBoard"/>
        </div >
    );
}

export default MainContent;