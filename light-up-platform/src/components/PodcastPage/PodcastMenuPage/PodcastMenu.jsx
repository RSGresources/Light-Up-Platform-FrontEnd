import React, { useState } from 'react';
import PodcastVideoCard from '../PodcastVideoCard/PodcastVideoCard'
import FetchPodcastErrorPage from '../../ErrorPages/FetchPodcastErrorPage/FetchPodcastErrorPage'
import PodcastPlaylist from '../PodcastPlayList/PodcastPlaylist'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadSpinner from '../../LoadSpinner/LoadSpinner'
import RandomColorSelector from '../../../utils/RandomColorSelector'
import useGetPodcasts from '../../../utils/customHooks/useGetPodcasts';
import { useHistory, withRouter } from 'react-router-dom'

const ITEMS_PER_ROW = 2
const Colors = new RandomColorSelector();

const PodcastMenu = () => {

    let [podcasts, error] = useGetPodcasts();
    const history = useHistory();

    const handleCardSelected = (id) => {
        history.push('/PodcastPlaylist', { data: { playlist: podcasts, selectedId: id }, source: PodcastMenu.name })
    }

    if (error) {
        return <FetchPodcastErrorPage />
    }

    if (!podcasts) {
        return <LoadSpinner color='#C63A3A' />
    }



    const ROWS_PER_PAGE = Math.ceil(podcasts.length / ITEMS_PER_ROW)
    let start = 0
    let rowKeyCount = 0
    return (

        <div className="container">
            {
                Array(ROWS_PER_PAGE).fill().map(() => {
                    const data = podcasts.slice(start, start + ITEMS_PER_ROW)
                    start += ITEMS_PER_ROW
                    rowKeyCount++

                    return (
                        <div className="row" key={rowKeyCount}>
                            {data.map((item, j) => {
                                return (
                                    <div className="col-sm-6" key={j}>
                                        <PodcastVideoCard
                                            id={item.id}
                                            dateRecorded={item.dateRecorded}
                                            timeRecorded={item.timeRecorded} title={item.title}
                                            author={item.author}
                                            color={Colors.getColor()}
                                            onClickCallback={handleCardSelected}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default withRouter(PodcastMenu)
