import React from 'react';
import podcastVidImg from '../../../resources/images/youtube-vid-icon.png'
import css from './PodcastVideoCard.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const PodcastVideoCard = ({ dateRecorded, timeRecorded, title, author }) => {

    return (
        <div className="card">
            <div className="card-header">
                {dateRecorded}
                {timeRecorded}
            </div>
            <div className="card-body">
                <div className="podcast-video-icon">
                    <img className={css.Image} src={podcastVidImg} alt="Youtube Podcast video Icon" />
                </div>
                <div className="podcast-video-info">
                    {title}
                    {author}
                </div>
            </div>
        </div>
    )
}

export default PodcastVideoCard
