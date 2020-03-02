import {
    React,
    useEffect,
    useState
} from 'react';
import podcastsMock from '../../resources/mock-data/availablePodcasts'

const getPodcasts = () => {

    return new Promise((resolve, reject) => {
        if (podcastsMock) {
            resolve(podcastsMock)
        }

        reject({
            message: 'Mock Data not Found',
            error: 'FetchMocksDataError'
        })
    })
};


const useGetPodcasts = () => {

    const [podcasts, setpodcasts] = useState();
    const [error, setError] = useState();

    useEffect(() => {

        const fetchPodcasts = async () => {
            try {
                const podcasts = await getPodcasts();
                setpodcasts(podcasts)
            } catch (error) {
                setError(error)
            }
        };
        fetchPodcasts();

    }, []);

    return [podcasts, error]
}

export default useGetPodcasts;