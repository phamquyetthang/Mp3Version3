import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {AlbumBoxs, ListAlbumBoxs} from '../asset/styles/styled';
import { styles, textStyles } from '../asset/styles/styles';

const ListAlbums = (props) => {
  const {musicFeatured, isloading} = props;
  return (
    isloading && (
      <ListAlbumBoxs
        data={musicFeatured}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item}) => (
          <AlbumBoxs>
            <Image source={require('../asset/image/newfeed9.jpg')} style={styles.albumImage}/>
            <Text style={textStyles.h3}>{item.name}</Text>
            <Text style={{color: 'gray'}}>{item.singer}</Text>
          </AlbumBoxs>
        )}
      />
    )
  );
};

export default ListAlbums;
