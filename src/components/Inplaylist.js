import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { ContainerView, Text1 } from '../asset/styles/themes'
import { useRoute} from '@react-navigation/native';
import SongItem from './SongItem';
export default function Inplaylist() {
    const router = useRoute();
    const song = router.params.song
    console.log(song)
    
    return (
        <ContainerView>
            <FlatList
            data={song}
            renderItem={({item}) => (
              <SongItem
                item={item}
                openInfo={() => openInfo(item)}
              />
            )}
            keyExtractor={(item) => item.url}
            showsVerticalScrollIndicator={false}
          />
        </ContainerView>
        
    )
}
