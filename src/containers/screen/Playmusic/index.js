import React, {useEffect, useState} from 'react';
import {Button, Image, Modal, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer from 'react-native-track-player';
export default function Playmusic({modalVisible, setModalVisible,song,setSong}) {
  // const {id,name,url,singer,image} = route.params;
  useEffect(() => {
    TrackPlayer.setupPlayer().then(async () => {
 
        // Adds a track to the queue
        await TrackPlayer.add({
            id: 'trackId',
            url: song.urlsong,
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: song.imagesong
        });
     
        // Starts playing it
        // TrackPlayer.play();
    });

  },[])
  const [isPlay, setIsPlay] = useState(false);
  const playmussic = ()=> {
    if (!isPlay) {
        TrackPlayer.play();
        setIsPlay(true);
      } else {
        TrackPlayer.pause();
        setIsPlay(false);
      }
  }
  return (
    <View >
      <View style={styles.Readbookbotomplayusic}>
        <TouchableOpacity style={{flexDirection:"row",justifyContent:"center"}} onPress={() => setModalVisible(true) }>
          <Image source={{uri: song.imagesong}} style={styles.imagesongbottom}/>
          <View >
            <Text style={{fontSize: 18, color: 'black'}}>
              {song.namesong}
            </Text>
            <Text style={{color: '#fff'}}>{song.singersong}</Text>
          </View>
        </TouchableOpacity>
         
          
          <View style={{flexDirection: 'row'}}>
          <Icon
                    name={isPlay ? 'pause' : 'play'}
                    color="#fff"
                    size={22}
                    onPress={playmussic}
                    style={{marginHorizontal: 20}}
                />
                <Icon
                    name={'step-forward'}
                    color="#fff"
                    size={22}
                    onPress={() => setModalVisible(false)}
                />
        </View>
        
        
      </View>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={{alignItems:"center",flex:1,backgroundColor:"hotpink"}}>
            <View>
                <Image source={{uri:song.imagesong}} style={styles.imagesong}/>
            </View>
            {/* <Button title="ok" onPress={()=>setModalVisible(false)}/> */}
            <Text style={styles.nameplay}>{song.namesong}</Text>
            <Text style={styles.singerplay}>{song.singersong}</Text>
            <View style={styles.plpau}>
                 <Icon
                    name={'step-backward'}
                    color="#fff"
                    size={22}
                    onPress={() => setModalVisible(false)}
                />
                <Icon
                    name={isPlay ? 'pause' : 'play'}
                    color="#fff"
                    size={22}
                    onPress={playmussic}
                    style={{marginHorizontal: 60}}
                />
                <Icon
                    name={'step-forward'}
                    color="#fff"
                    size={22}
                    onPress={() => setModalVisible(false)}
                />
            </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  Readbookbotomplayusic: {
    backgroundColor: 'hotpink',
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    //   zIndex: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  imagesongbottom:{
    height:40,
    width:40,
    marginRight:8,
    borderRadius:4
  },
  imagesong:{
    width:250,
    height:250,
    alignItems:"center",marginTop:60,
    borderRadius:8
  },
  modalsong:{
    width:"100%",
    height:"100%", 
    backgroundColor: 'red',
    alignItems:"center",
    justifyContent:"center",
    marginLeft:20
  },
  nameplay:{
      fontWeight:"bold",
      marginTop:16,
      fontSize:20,

  },
  singerplay:{
      color:"#fff",
      marginTop:4
  },
  plpau:{
    flexDirection: "row",
    paddingTop:16,
    height:60
    // margintop:60
  },
 
});
