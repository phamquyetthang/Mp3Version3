import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {unitH, unitW} from '../asset/styles/size';
import Icon from 'react-native-vector-icons/Ionicons';
const SongItem = ({item, trend, like}) => {
  return (
    item && (
      <TouchableOpacity style={localStyles.songitem}>
        {trend && <Text style={localStyles.order}>1</Text>}
        <Image source={{uri: item.image}} style={localStyles.img} />
        <View>
          <Text style={localStyles.title}>{item.name}</Text>
          <Text style={localStyles.lable}>{item.singer}</Text>
        </View>
        <View style={localStyles.options}>
          {!like && <Icon name="md-heart-outline" color="#fff" size={24} />}
          <Icon name="md-ellipsis-vertical" color="#fff" size={24} />
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
    color: '#fff',
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
    color: '#fff',
    fontSize: 16 * unitH,
    fontWeight: 'bold',
    marginBottom: 6 * unitH,
    marginLeft: 6 * unitW,
  },
  lable: {color: '#ddd', marginLeft: 6 * unitW},
  options: {
    flexDirection: 'row',
    position: 'absolute',
    right: 4,
    width: 56 * unitW,
    justifyContent: 'space-between',
  },
});
export default SongItem;
