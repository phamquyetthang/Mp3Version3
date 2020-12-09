import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import {
  ContainerView,
  TextTheme,
  Text1,
  Text2,
  ButtonTheme,
  BackgroudTheme,
} from '../../asset/styles/themes';
import {styles} from './styles';
import Playlist from '../../components/Playlist';
import {useNavigation} from '@react-navigation/native';
import IconCustom from '../../components/IconCustom';
import Modal from 'react-native-modal';

const Stream = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allPlaylist, setAllPlaylist] = useState([]);
  useEffect(() => {
    async function getdata() {
      try {
        const response = await fetch(
          `https://fakeserver-musicaap.herokuapp.com/playlist`,
        );
        // console.log(response)
        const jsonData = await response.json();

        console.log(jsonData[0].name);
        setAllPlaylist(jsonData);
      } catch (e) {
        console.log(e);
      }
    }
    getdata();
    // console.log(projects)s
    console.log('---');
  }, []);
  const navigation = useNavigation();
  const openInplaylist = (songinplaylist) => {
    navigation.navigate('Inplaylist', {
      song: songinplaylist,
      user: 'Me',
    });
  };
  const renderItem = ({item, index}) => {
    console.log(item.songinplaylist);
    return (
      <TouchableOpacity onPress={() => openInplaylist(item.songinplaylist)}>
        <Playlist name={item.name} />
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
          <View>
            <Text2 style={{fontSize: 20, marginTop: 20}}>Tên Playlist</Text2>
          </View>

          <TextInput style={styles.inputPlaylistName} />
          <ButtonTheme
            style={styles.buttonInputPlaylist}
            onPress={() => setModalVisible(false)}>
            <Text1>Tạo Playlist</Text1>
          </ButtonTheme>
        </BackgroudTheme>
      </Modal>
    </ContainerView>
  );
};

export default Stream;
