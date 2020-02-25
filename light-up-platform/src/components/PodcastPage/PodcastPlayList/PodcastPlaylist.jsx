import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import AccessDeniedPage from '../../ErrorPages/AccessDeniedPage/AccessDeniedPage'
import NoContentAvailablePage from '../../ErrorPages/NoContentAvailablePage/NoContentAvailablePage';


const PodcastPlaylist = () => {

    const { state } = useLocation();

    if (state === undefined || state.source !== "PodcastMenu" || state.data.playlist === undefined || state.data.selectedId === undefined) {
        return <AccessDeniedPage />
    };


    const getVideo = () => {
        let vidURL = undefined
        state.data.playlist.forEach(data => {
            if (data.id === state.data.selectedId && data.videoURL) {
                vidURL = data.videoURL + '?autoplay=1'
            }
        });

        return vidURL
    }

    const URL = getVideo()
    if (URL === undefined) {
        return <NoContentAvailablePage />
    }
    return (
        <iframe width="560"
            height="315"
            title='test-vid'
            src={getVideo()}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    )
};

export default PodcastPlaylist