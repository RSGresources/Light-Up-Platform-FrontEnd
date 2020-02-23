import React, { useState } from 'react';
import PodcastVideoCard from '../PodcastVideoCard/PodcastVideoCard'
import FetchPodcastErrorPage from '../../ErrorPages/FetchPodcastErrorPage/FetchPodcastErrorPage'
import PodcastPlaylist from '../PodcastPlayList/PodcastPlaylist'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadSpinner from '../../LoadSpinner/LoadSpinner'
import RandomColorSelector from '../../../utils/RandomColorSelector'
import useGetPodcasts from '../../../utils/customHooks/useGetPodcasts';

const ITEMS_PER_ROW = 2
const Colors = new RandomColorSelector();

const PodcastMenu = () => {

    const [cardSelected, setCardSelected] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const [podcasts, error] = useGetPodcasts();

    const handleCardSelected = (id) => {
        setCardSelected(true);
        setSelectedId(id);
    }

    if (error) {
        return <FetchPodcastErrorPage />
    }

    if (!podcasts) {
        return (
            <LoadSpinner color='#C63A3A' />
        )
    }

    if (cardSelected) {
        return <PodcastPlaylist playlist={podcasts} selectionId={selectedId} />
    }


    const ROWS_PER_PAGE = Math.ceil(podcasts.length / ITEMS_PER_ROW)
    return (

        <div className="container">
            {
                Array(ROWS_PER_PAGE).fill().map((_, i) => i += 1).map((i) => {
                    const data = podcasts.splice(0, ITEMS_PER_ROW)

                    return (
                        <div className="row" key={i}>
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

export default PodcastMenu
