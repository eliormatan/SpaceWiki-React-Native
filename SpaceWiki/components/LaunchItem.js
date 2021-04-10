import React, { useContext } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { AppContext } from '../common/context';
import { Styles } from '../containers/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { DEFAULT_THUMBNAIL, PAGE_NOT_FOUND } from '../common/constants'

export default function LaunchItem({ launch, isFavorite }) {
    const { toggleFavoriteId, setWikiURL } = useContext(AppContext);

    const url = (launch?.infoURLs?.url ? launch.infoURLs.url :
        (launch?.rocket?.configuration?.wiki_url ? launch.rocket.configuration.wiki_url :
            PAGE_NOT_FOUND));

    function onFavorite(event) {
        toggleFavoriteId(launch.id);
    }

    return (
        <TouchableHighlight id='entry' onPress={(event) => { setWikiURL(url) }} activeOpacity={0.8}>
            <View style={Styles.container}>
                <View style={Styles.leftContainer}>
                    <View>
                        <Image source={{
                            uri: launch.image ? launch.image : launch.rocket?.image_url ? launch.rocket.image_url : DEFAULT_THUMBNAIL
                        }}
                            style={Styles.image} />
                    </View>
                    <View>
                        <Text style={{ ...Styles.indicatorText, backgroundColor: launch.status.name === 'Failure' ? '#FF7070' : 'lightgreen' }}>{launch.status.name}</Text>
                    </View>
                </View>
                <View style={Styles.rightContainer}>
                    <TouchableHighlight id='like' onPress={onFavorite} activeOpacity={0.9}>
                        <Icon
                            name={isFavorite ? 'heart' : 'heart-outline'}
                            size={30}
                            color={isFavorite ? 'red' : 'white'}
                        />
                    </TouchableHighlight>
                    <Text style={{ ...Styles.text, fontSize: 20, color: 'white' }} numberOfLines={1}>{launch.name}</Text>
                    <Text style={Styles.text}>{launch.net}</Text>
                    <Text style={Styles.text} numberOfLines={2}>{launch.pad.location.name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

