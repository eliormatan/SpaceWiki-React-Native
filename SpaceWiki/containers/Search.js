
export function debounce(func, delay) {
    let timer;

    const result = function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    }

    result.cancel = function () {
        clearTimeout(timer)
    }

    return result;
};

export function onChangeText(text, setSearch, onChangeTextDebounce, loadData, toggleIsSearch, toggleDisplaySearch) {
    setSearch(text);
    toggleIsSearch(true);
    onChangeTextDebounce(text, onChangeTextDebounce, loadData, toggleIsSearch, toggleDisplaySearch);
}

export function filterSearchLaunches(text, onChangeTextDebounce, loadData, toggleIsSearch, toggleDisplaySearch) {
    if (text.length < 3) {
        onChangeTextDebounce.cancel();
        toggleDisplaySearch(false);
    }
    else {
        loadData(text, false);
        toggleDisplaySearch(true);
    }
    toggleIsSearch(false);
}