import React, { useCallback, useState, useContext, useMemo } from 'react';
import { View } from 'react-native';
import LaunchItemList from './LaunchItemList'
import { AppContext } from '../common/context';
import { useFocusEffect } from '@react-navigation/core';
import { SearchBar } from 'react-native-elements';
import { debounce, onChangeText, filterSearchLaunches } from '../containers/Search'
import { DELAY_TIME } from '../common/constants'
import usePagination from '../hooks/usePagination';


export default function Favorites() {
  const { favoritesIds } = useContext(AppContext);
  const { launches, isLoading, loadData, searchedLaunches } = usePagination({ favoritesIds });
  const [isSearch, toggleIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [displaySearch, toggleDisplaySearch] = useState(false);
  const onChangeTextDebounce = useMemo(() => debounce(filterSearchLaunches, DELAY_TIME), []);

  useFocusEffect(
    useCallback(() => {
      setSearch('');
      toggleDisplaySearch(false)
    }, [])
  )

  useFocusEffect(
    useCallback(() => {
      displaySearch ? loadData(search, false) : loadData();
    }, [favoritesIds])
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
  );
}