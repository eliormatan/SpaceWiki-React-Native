
export const getLaunchesFromStroage = async (setFavoriteIds, getItem) => {
    try {
        const lastFavoritesIds = await getItem();
        if (lastFavoritesIds) {
            setFavoriteIds(JSON.parse(lastFavoritesIds));
        } else {
            return [];
        }
    } catch (error) {
        console.error();
    }
};

export const setLaunchesInStroage = async (nextFavoriteIds, setFavoriteIds, setItem) => {
    try {
        await setItem(JSON.stringify(nextFavoriteIds));
        setFavoriteIds(nextFavoriteIds);
    } catch (error) {
        console.error();
    }
};