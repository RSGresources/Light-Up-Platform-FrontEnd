import React, { useState, useRef, useEffect } from 'react';
import PodcastCard from './PodcastCard';


const Card = () => {

    const [isLoaded, setIsLoaded] = useState(false);


    return (
        <div>
            {!isLoaded && <PodcastCard />}
        </div>

    )
}

export default Card