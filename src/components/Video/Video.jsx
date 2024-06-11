import React from 'react'
import "./Video.scss"
import videoDetails from '../../data/video-details.json';
import MainVideo from '../../components/MainVideo/MainVideo';

export default function Video ({changeVideo, id, title, channel, image}) {
    function changeVideo(id) {
        const selectedVideo = videoDetails.find((video) => {
            return video.id === id;
        })

        MainVideo(selectedVideo); 
    }
    
    const clickHandler = () => {
        changeVideo(id);
    };

    return (
    <div className='next-video-list' onClick={clickHandler} id={id} key={id}>
        <div className='next-video-list__left'>
            <img className='next-video-list__image' src={image} alt={title} />
        </div>
        <div className='next-video-list__right'>
            <h4 className='next-video-list__title'>{title}</h4>
            <p className='next-video-list__channel'>{channel}</p>
        </div>
    </div>
    )
}