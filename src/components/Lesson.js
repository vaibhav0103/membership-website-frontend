import React from 'react';
import ReactPlayer from 'react-player/youtube';


const Lesson = ({lesson}) => {
    const url = "https://youtu.be/FVeZcM6tBQU"
    return (
        <div>
            <p>{lesson.id}</p>
            <p>{lesson.title}</p>
            <p>{lesson.description}</p>
            <ReactPlayer url={url} playing={false} controls={true}/>
        </div>
    )
}

export default Lesson
