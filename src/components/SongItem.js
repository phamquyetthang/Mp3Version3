import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {unitH, unitW} from '../asset/styles/size';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text1, Text2, TextTheme} from '../asset/styles/themes';
const SongItem = ({item, trend, like}) => {
  return (
    item && (
      <TouchableOpacity style={localStyles.songitem}>
        {trend && <TextTheme style={localStyles.order}>1</TextTheme>}
        <Image source={{uri: item.image}} style={localStyles.img} />
        <View>
          <Text1 style={localStyles.title}>{item.name}</Text1>
          <Text2 style={localStyles.lable}>{item.singer}</Text2>
        </View>
        <View style={localStyles.options}>
          {!like && (
            <TextTheme>
              <Icon name="md-heart-outline" size={24} />
            </TextTheme>
          )}
          <TextTheme>
            <Icon name="md-ellipsis-vertical" size={24} />
          </TextTheme>
        </View>
      </TouchableOpacity>
    )
  );
};

const localStyles = StyleSheet.create({
  songitem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4 * unitW,
  },
  order: {
    fontSize: 24 * unitH,
    marginLeft: 8 * unitW,
    textDecorationLine: 'underline',
  },
  img: {
    width: 64 * unitW,
    height: 64 * unitH,
    borderRadius: 4,
    marginLeft: 8 * unitW,
  },
  title: {
    marginBottom: 6 * unitH,
    marginLeft: 6 * unitW,
  },
  lable: {marginLeft: 6 * unitW},
  options: {
    flexDirection: 'row',
    position: 'absolute',
    right: 4,
    width: 56 * unitW,
    justifyContent: 'space-between',
  },
});
export default SongItem;
