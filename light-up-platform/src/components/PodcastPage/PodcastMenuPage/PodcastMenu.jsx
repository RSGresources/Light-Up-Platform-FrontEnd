import React from 'react';
import podcastsMock from '../../../resources/mock-data/availablePodcasts'
import PodcastVideoCard from '../PodcastVideoCard/PodcastVideoCard'
import 'bootstrap/dist/css/bootstrap.min.css';

const ITEMS_PER_ROW = 2
const ROWS_PER_PAGE = Math.ceil(podcastsMock.length / ITEMS_PER_ROW)

const PodcastMenu = () => {
    return (
        <div className="container">
            {
                Array(ROWS_PER_PAGE).fill().map((_, i) => i += 1).map((i) => {
                    const data = podcastsMock.splice(0, ITEMS_PER_ROW)
                    console.log(data)
                    return (
                        <div className="row" key={i}>
                            {data.map((item, j) => {
                                return (
                                    <div className={"col-" + ROWS_PER_PAGE.toString()} key={j}>
                                        <PodcastVideoCard dateRecorded={item.dateRecorded}
                                            timeRecorded={item.timeRecorded} title={item.title}
                                            author={item.author}
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
