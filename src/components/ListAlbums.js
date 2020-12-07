import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from '../asset/styles/styled';
import { Text1, TextTheme } from '../asset/styles/themes';
import {setIsPlayingAction} from '../redux/actions';

const ListAlbums = ({articles, isloading, Song, setSong}) => {
  // const {musicFeatured, isloading} = props;
  const dispatch = useDispatch();
  const PlaySong = (id, name, url, singer, image, time) => {
    setSong({
      idsong: id,
      namesong: name,
      urlsong: url,
      singersong: singer,
      imagesong: image,
      time: time,
    });
  };
  const renderItem = ({item, index}) => {
    if (index < 11) {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => dispatch(setIsPlayingAction(item))}>
          <View>
            <Image
              source={{uri: item.image}}
              style={styles.DashboardImageFeatured}
            />
            <Text1>{item.name}</Text1>
            <TextTheme>{item.singer}</TextTheme>
          </View>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={styles.DashboardFeatured}>
      {isloading ? (
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      ) : null}
    </View>
  );
};

export default ListAlbums;
