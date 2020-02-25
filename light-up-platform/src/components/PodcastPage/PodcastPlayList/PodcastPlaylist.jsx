import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import AccessDeniedPage from '../../ErrorPages/AccessDeniedPage/AccessDeniedPage'

const PodcastPlaylist = () => {

    const { state } = useLocation();

    const [playlist, setPlaylist] = useState(state.data.playlist)
    const [selectedId, setSelectedId] = useState(state.data.selectedId)
    const [source, setSource] = useState(state.source)

    console.log(playlist, selectedId, source)

    if (source !== "PodcastMenu" || playlist === undefined || selectedId === undefined) {
        return <AccessDeniedPage />;
    };


    const getVideo = () => {
        let vidURL = ''
        playlist.forEach(data => {
            if (data.id === selectedId) {
                vidURL = data.videoURL + '?autoplay=1'
            }
        });
        return vidURL
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