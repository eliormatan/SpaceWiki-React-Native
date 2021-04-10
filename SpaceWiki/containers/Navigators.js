import React, { useEffect, useContext } from 'react';
import { AppContext } from '../common/context';
import { WebView } from 'react-native-webview';
import Launches from '../components/Launches';
import Favorites from '../components/Favorites';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Dimensions, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const size = Dimensions.get('screen');

export function LaunchesNavigator({ navigation }) {
  const { wikiURL } = useContext(AppContext);
  useEffect(() => { wikiURL ? navigation.navigate('WebView') : null }, [wikiURL]);

  return (
    <Stack.Navigator initialRouteName='Launches'>
      {wikiURL ? <Stack.Screen name='WebView' component={LaunchWebView} options={{ headerShown: false }} startInLoadingState={true} /> : null}
      <Stack.Screen name='Launches' component={Launches} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export function FavoritesNavigator({ navigation }) {
  const { wikiURL } = useContext(AppContext);
  useEffect(() => { wikiURL ? navigation.navigate('LaunchWebView') : null }, [wikiURL]);

  return (
    <Stack.Navigator initialRouteName='Favorites'>
      {wikiURL ? <Stack.Screen name='LaunchWebView' component={LaunchWebView} options={{ headerShown: false }} startInLoadingState={true} /> : null}
      <Stack.Screen name='Favorites' component={Favorites} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function LaunchWebView() {
  const { wikiURL, setWikiURL } = useContext(AppContext);
  const navigation = useNavigation();
  //todo: style button
  return (
    <View style={{ flex: 1 }}>
      <Button title='Back' onPress={() => { navigation.goBack(); setWikiURL(null) }} />
      <WebView
        style={{ width: size.width, height: size.height }}
        source={{ uri: wikiURL }}
      />
    </View>
  )
}