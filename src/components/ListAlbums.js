import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../asset/styles/styled';

const ListAlbums = ({
  articles,
  isloading,
  Song,
  setSong,
  setIsplaying,
  setModalVisible,
}) => {
  // const {musicFeatured, isloading} = props;
  const PlaySong = (id, name, url, singer, image, time) => {
    setSong({
      idsong: id,
      namesong: name,
      urlsong: url,
      singersong: singer,
      imagesong: image,
      time: time,
    });
    setIsplaying(true);
    setModalVisible(true);
  };
  const renderItem = ({item, index}) => {
    if (index < 11) {
      return (
        <TouchableOpacity
          key={index}
          onPress={() =>
            PlaySong(
              item.id,
              item.name,
              item.url,
              item.singer,
              item.image,
              item.time,
            )
          }>
          <View>
            <Image
              source={{uri: item.image}}
              style={styles.DashboardImageFeatured}
            />
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{color: 'gray'}}>{item.singer}</Text>
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
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      ) : null}
    </View>
  );
};

export default ListAlbums;
