import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { AppContext } from '../common/context';
import { LaunchesNavigator, FavoritesNavigator } from '../containers/Navigators'
import { getLaunchesFromStroage, setLaunchesInStroage } from '../containers/Storage'


const Tab = createBottomTabNavigator();

export default function App() {
  const [wikiURL, setWikiURL] = useState('');
  const [favoritesIds, setFavoriteIds] = useState([]);
  const { getItem, setItem } = useAsyncStorage('@favoritesIds');

  const toggleFavoriteId = useCallback((launchId) => {
    let nextFavoriteIds;
    if (favoritesIds.includes(launchId)) {
      nextFavoriteIds = favoritesIds.filter((id) => id !== launchId);
    }
    else {
      nextFavoriteIds = favoritesIds.concat(launchId);
    }
    setLaunchesInStroage(nextFavoriteIds, setFavoriteIds, setItem);
  }, [favoritesIds]);

  useEffect(() => {
    getLaunchesFromStroage(setFavoriteIds, getItem);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppContext.Provider value={{ favoritesIds, toggleFavoriteId, wikiURL, setWikiURL }}>
          <Tab.Navigator tabBarOptions={{ labelStyle: { fontSize: 20 } }}>
            <Tab.Screen name='Launches' component={LaunchesNavigator} />
            <Tab.Screen name='Favorites' component={FavoritesNavigator} />
          </Tab.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
};



