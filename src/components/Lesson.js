import React from 'react';
import ReactPlayer from 'react-player/youtube';


const Lesson = ({lessons}) => {
    const url = "https://youtu.be/FVeZcM6tBQU"
    return (
        <div className="row">
            <div className="col-4 col-md-3">
                <div className="list-group" id="list-tab" role="tablist">
                    {lessons.map((lesson)=>{
                        return (
                            <a key={lesson.id} 
                            className={`list-group-item list-group-item-action ${ lesson.order===1 ? 'active': ''}`} 
                            id={`lesson-${lesson.id}`} data-bs-toggle="list" 
                            href={`#lesson-${lesson.id}-content`} role="tab" 
                            aria-controls={`lesson-${lesson.id}-content`}>

                                Lesson {lesson.id}
                            </a>
                        )
                    })}
                </div>
            </div>
            <div className="col-8 col-md-9">
                <div className="tab-content" id="nav-tabContent">
                    {lessons.map((lesson)=>{
                        return (
                        
                            <div className={`tab-pane fade ${ lesson.order===1 ? 'active show': ''}`} 
                            id={`lesson-${lesson.id}-content`} role="tabpanel" 
                            aria-labelledby={`lesson-${lesson.id}`}>
                                <p>{lesson.id}</p>
                                <p>{lesson.title}</p>
                                <p>{lesson.description}</p>
                                <div className='player-wrapper'>
                                    <ReactPlayer className='react-player' 
                                    url={url} playing={false} controls={true} width='100%' height='100%'/>
                                </div>
                                
                            </div> 
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Lesson
