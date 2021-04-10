import { useEffect, useState } from 'react';
import { PAGE_SIZE } from '../common/constants';

export default function usePagination({ favoritesIds }) {

    const [offset, setOffset] = useState(0);
    const [launches, setLaunches] = useState([]);
    const [searchedLaunches, setSearchedLaunches] = useState([]);
    const [isLoading, toggleLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);


    async function loadData(text, reachedEnd) {
        const nextOffset = reachedEnd ? offset : 0;
        const url = `https://lldev.thespacedevs.com/2.0.0/launch/?limit=${PAGE_SIZE}&offset=${nextOffset}&mode=detailed&search=${text ? encodeURIComponent(text) : ''}&id=${favoritesIds?.join(',') ?? ``}`;

        if (isLoading || (!hasMore && reachedEnd) || favoritesIds?.length === 0) {
            return;
        }

        try {
            toggleLoading(true);
            const response = await fetch(url)
            const data = await response.json();

            if (data) {
                let nextLaunches;
                if (text) {
                    reachedEnd ? nextLaunches = searchedLaunches.concat(data.results) : nextLaunches = data.results;
                    setSearchedLaunches(nextLaunches);

                } else {
                    reachedEnd ? nextLaunches = launches.concat(data.results) : nextLaunches = data.results;
                    setLaunches(nextLaunches);
                }
                setOffset(nextOffset + PAGE_SIZE);
            }
            setHasMore(!!data.next);
            toggleLoading(false);
        } catch (error) {
            console.error();
            toggleLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);


    return { launches, isLoading, loadData, searchedLaunches };
}
