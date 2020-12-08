import React, { useState } from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import { ContainerView, TextTheme,ModalPlaylist } from '../../asset/styles/themes';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Playlist from '../../components/Playlist';

const Stream = () => {
  const [modalVisible,setModalVisible] = useState(false)
  return (
    <ContainerView>
      <View style={styles.createPlaylist} >
        <TouchableOpacity style={styles.iconPluss} onPress={()=>setModalVisible(true)}>
        <Icon
                name='plus-circle'
                color="#fff"
                size={20}
                style={{fontWeight: '100'}}
              />
         
        </TouchableOpacity>
        <TextTheme style={styles.textcreatePlaylist} >Tạo playlist mới</TextTheme>
      </View>
      <Playlist name="Nhạc của Huynh"/>
      <Modal
         animationType="slide"
         visible={modalVisible}
      >
        <ModalPlaylist>
          <TextTheme>sdsdsd</TextTheme>
        </ModalPlaylist>

        
      </Modal>
    </ContainerView>
  );
};

export default Stream;
