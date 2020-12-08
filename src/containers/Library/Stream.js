import React, { useEffect, useState } from 'react';
import {FlatList, Image, Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { ContainerView, TextTheme,ModalPlaylist, Text1, Text2, ButtonTheme } from '../../asset/styles/themes';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Playlist from '../../components/Playlist';
import {useNavigation} from '@react-navigation/native';

const Stream = () => {
  const [modalVisible,setModalVisible] = useState(false)
  const [allPlaylist,setAllPlaylist]= useState([])
  useEffect(() => {
    async function getdata(){
     try {
        const response = await fetch(`https://fakeserver-musicaap.herokuapp.com/playlist`);
        // console.log(response)
        const jsonData = await response.json();

        console.log(jsonData[0].name);
      setAllPlaylist(jsonData)
        console.log('----------------------');
      } catch (e) {
        console.log(e);
      }
    }
    getdata()
  // console.log(projects)
    console.log('---')
  }, [])
  const navigation = useNavigation();
  const openInplaylist = (songinplaylist) => {
    navigation.navigate('Inplaylist',{
        song : songinplaylist,
        user: 'Me'
    });
  };
  const renderItem = ({ item,index }) => {
    console.log(item.songinplaylist);
    return(
      <TouchableOpacity onPress={()=>openInplaylist(item.songinplaylist)}>
        <Playlist name={item.name} />
       </TouchableOpacity>
    );
    
    
  }
    
  
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
      <FlatList
        data={allPlaylist}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
      
      <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible}
      > 
        <ModalPlaylist style={styles.modalInputPlaylist}>
          <View>
            <Text2 style={{fontSize:20,marginTop:20}}>Tên Playlist</Text2>
          </View>
          
          <TextInput  style={styles.inputPlaylistName}/>
          <ButtonTheme style={styles.buttonInputPlaylist} onPress={()=>setModalVisible(false)} >
            <Text1>Tạo Playlist</Text1>
          </ButtonTheme>
        </ModalPlaylist>

        
      </Modal>
    </ContainerView>
  );
};

export default Stream;
