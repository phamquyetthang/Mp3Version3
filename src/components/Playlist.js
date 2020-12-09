import React from 'react';
import {View} from 'react-native';
import {TextTheme} from '../asset/styles/themes';
import {styles} from '../containers/Library/styles';

export default function Playlist({name}) {
  return (
    <View style={styles.createPlaylist}>
      <View style={styles.iconPluss}></View>
      <TextTheme style={styles.textcreatePlaylist}>{name}</TextTheme>
    </View>
  );
}
