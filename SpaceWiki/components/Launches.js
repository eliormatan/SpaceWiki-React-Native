import React, { useState, useMemo, useCallback } from 'react';
import { View } from 'react-native';
import LaunchItemList from '../components/LaunchItemList'
import { SearchBar } from 'react-native-elements';
import { debounce, onChangeText, filterSearchLaunches } from '../containers/Search'
import { DELAY_TIME } from '../common/constants'
import usePagination from '../hooks/usePagination';
import { useFocusEffect } from '@react-navigation/core';

export default function Launches() {
    const { launches, isLoading, loadData, searchedLaunches } = usePagination({});
    const [isSearch, toggleIsSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [displaySearch, toggleDisplaySearch] = useState(false);
    const onChangeTextDebounce = useMemo(() => debounce(filterSearchLaunches, DELAY_TIME), []);

    useFocusEffect(
        useCallback(() => {
            setSearch('');
            toggleDisplaySearch(false);
        }, [])
    )

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                placeholder='Type here...'
                value={search}
                round
                onChangeText={(text) => onChangeText(text, setSearch, onChangeTextDebounce, loadData, toggleIsSearch, toggleDisplaySearch)}
                showLoading={isSearch ? true : false}
            />
            <LaunchItemList launches={displaySearch ? searchedLaunches : launches} isLoading={isLoading} loadData={loadData} search={search} />
        </View>
    )
}
