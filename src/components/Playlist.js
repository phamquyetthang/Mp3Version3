import React from 'react';
import {Image, View} from 'react-native';
import {TextTheme} from '../asset/styles/themes';
import {styles} from '../containers/Library/styles';

export default function Playlist({name,image}) {
  return (
    <View style={styles.createPlaylist}>
      <Image style={styles.iconPluss} source={{uri: image}}></Image>
      <TextTheme style={styles.textcreatePlaylist}>{name}</TextTheme>
    </View>
  );
}
