import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ContainerView} from '../../asset/styles/themes';
import SongItem from '../../components/SongItem';
import {setIsPlayingAction} from '../../redux/actions';

const Local = () => {
  const isFocused = useIsFocused();
  const music = useSelector((state) => state.listMusic);
  const dispatch = useDispatch();
  return (
    <ContainerView>
      {isFocused && (
        <FlatList
          data={music}
          renderItem={({item}) =>
            item.islike === true && (
              <SongItem
                item={item}
                handlePress={() => dispatch(setIsPlayingAction(item))}
              />
            )
          }
          keyExtractor={(item) => item.url}
          showsVerticalScrollIndicator={false}
        />
      )}
    </ContainerView>
  );
};

export default Local;
