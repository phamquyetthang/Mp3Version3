import React from 'react';
import {FlatList} from 'react-native';
import {ContainerView} from '../asset/styles/themes';
import {useRoute} from '@react-navigation/native';
import SongItem from './SongItem';
export default function Inplaylist() {
  const router = useRoute();
  const song = router.params.song;

  return (
    <ContainerView>
      <FlatList
        data={song}
        renderItem={({item}) => (
          <SongItem item={item} openInfo={() => openInfo(item)} />
        )}
        keyExtractor={(item) => item.url}
        showsVerticalScrollIndicator={false}
      />
    </ContainerView>
  );
}
