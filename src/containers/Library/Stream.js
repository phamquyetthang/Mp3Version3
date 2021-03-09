import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import {
  ContainerView,
  TextTheme,
  Text2,
  ButtonTheme,
  BackgroudTheme,
  TextWhite,
} from '../../asset/styles/themes';
import {styles} from './styles';
import Playlist from '../../components/Playlist';
import {useNavigation} from '@react-navigation/native';
import IconCustom from '../../components/IconCustom';
import Modal from 'react-native-modal';

const Stream = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allPlaylist, setAllPlaylist] = useState([]);
  const [namePlaylist, setNamePlaylist] = useState('');
  async function getdata() {
    try {
      const response = await fetch(
        `https://fakeserver-musicaap.herokuapp.com/playlist`,
      );
      // console.log(response)
      const jsonData = await response.json();
      setAllPlaylist(jsonData);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    // console.log('fc',isFocused)
    getdata();
  }, []);
  async function postPlaylist(data) {
    if (namePlaylist != '') {
      try {
        const response = await fetch(
          `https://fakeserver-musicaap.herokuapp.com/playlist`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: data,
              songinplaylist: [],
            }),
          },
        );
        const jsonData = await response.json();
        console.log(jsonData);
      } catch (e) {
        console.log(e);
      }
    }
    getdata();
  }
  const createPlaylist = () => {
    postPlaylist(namePlaylist);
    setModalVisible(false);
  };
  const navigation = useNavigation();
  const openInplaylist = (songinplaylist) => {
    navigation.navigate('Inplaylist', {
      song: songinplaylist,
      user: 'Me',
    });
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => openInplaylist(item.songinplaylist)}>
        <Playlist name={item.name} image={item?.songinplaylist[0]?.image} />
      </TouchableOpacity>
    );
  };

  return (
    <ContainerView>
      <View style={styles.createPlaylist}>
        <IconCustom
          name="md-add-circle"
          handlePress={() => setModalVisible(true)}
          style={styles.iconPluss}
          size={28}
        />
        <TextTheme style={styles.textcreatePlaylist}>
          Tạo playlist mới
        </TextTheme>
      </View>
      <FlatList
        data={allPlaylist}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />

      <Modal
        isVisible={modalVisible}
        style={styles.fstart}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}>
        <BackgroudTheme style={styles.modalInputPlaylist}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text2 style={{fontSize: 20, marginTop: 20}}>Tên Playlist</Text2>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text2 style={{fontSize: 20, marginTop: 20}}> x </Text2>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.inputPlaylistName}
            onChangeText={(text) => setNamePlaylist(text)}
          />
          <ButtonTheme
            style={styles.buttonInputPlaylist}
            onPress={createPlaylist}>
            <TextWhite>Tạo Playlist</TextWhite>
          </ButtonTheme>
        </BackgroudTheme>
      </Modal>
    </ContainerView>
  );
};

export default Stream;
