import React from 'react'
import './UnderVideo.scss'
import Comments from '../Comments/Comments'
import NextVideo from '../NextVideo/NextVideo'
import MainVideoDetails from '../MainVideoDetails/MainVideoDetails'

export default function UnderVideo ({currentVideoID, currentVideoDetails, changeMainVideo}) {
    return (
        <>
            <section className='under-video'>
                <div className='under-video__container'>
                    <div className='under-video__left'>
                        <MainVideoDetails currentVideoDetails={currentVideoDetails} />
                        <Comments currentVideoDetails={currentVideoDetails} />
                    </div>
                    <div className='under-video__right'>
                        <NextVideo
                            changeMainVideo={changeMainVideo}
                            currentVideoID={currentVideoID}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}