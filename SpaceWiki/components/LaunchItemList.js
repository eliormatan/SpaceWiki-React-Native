import React, { useContext } from 'react';
import { ActivityIndicator, VirtualizedList } from 'react-native';
import { View } from 'react-native';
import LaunchItem from '../components/LaunchItem';
import { AppContext } from '../common/context';

export default function LaunchItemList({ launches, isLoading, loadData, search }) {
    const { favoritesIds } = useContext(AppContext);

    return (
        <View style={{ flex: 1 }}>
            <VirtualizedList
                style={{ flex: 1 }}
                data={launches}
                renderItem={({ item }) => (
                    <LaunchItem launch={item} key={item.id} isFavorite={favoritesIds.includes(item.id)} />
                )}
                getItem={(data, index) => {
                    return data[index];
                }}
                getItemCount={(data) => data.length}
                keyExtractor={(item) => item.id}
                onEndReached={({ distanceFromEnd }) => {
                    if (distanceFromEnd > 0) {
                        search?.length > 2 ? loadData(search, true) : loadData('', true)
                    }
                }}
                onEndReachedThreshold={0.5}
            />
            {isLoading ? <ActivityIndicator size='large' color='black' /> : null}
        </View>
    )
}

