import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';
import Progress from './Progress';
import {useSelector} from 'react-redux';
import {unitH, unitW} from '../../asset/styles/size';
export default function Playmusic({
  modalVisible,
  setModalVisible,
  song,
  setSong,
}) {
  useEffect(() => {
    console.log(song);
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: 'trackId',
        url: song.url,
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: song.image,
      });
    });
  }, [song]);
  const [isPlay, setIsPlay] = useState(false);
  const playmussic = () => {
    if (!isPlay) {
      TrackPlayer.play();
      setIsPlay(true);
    } else {
      TrackPlayer.pause();
      setIsPlay(false);
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{backgroundColor: '#2A1B39'}}>
        <Progress time={song.time} />
        <View
          style={{
            flexDirection: 'row',
            padding: 4 * unitW,
          }}>
          <Image source={{uri: song.image}} style={styles.imagesongbottom} />
          <View>
            <Text style={{fontSize: 18, color: '#fff'}}>{song.name}</Text>
            <Text style={{color: '#fff'}}>{song.singer}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              right: 8 * unitW,
              position: 'absolute',
            }}>
            <Icon
              name={'md-heart-outline'}
              color="#fff"
              size={22}
              onPress={() => setModalVisible(false)}
            />
            <Icon
              name={isPlay ? 'md-pause' : 'md-play'}
              color="#fff"
              size={22}
              onPress={playmussic}
              style={{marginHorizontal: 20 * unitW}}
            />
            <Icon
              name={'md-play-skip-forward'}
              color="#fff"
              size={22}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible}>
        <View
          style={{alignItems: 'center', flex: 1, backgroundColor: 'hotpink'}}>
          <View>
            <Image source={{uri: song.image}} style={styles.imagesong} />
          </View>
          {/* <Button title="ok" onPress={()=>setModalVisible(false)}/> */}
          <Text style={styles.nameplay}>{song.name}</Text>
          <Text style={styles.singerplay}>{song.singer}</Text>
          <View style={styles.plpau}>
            <Icon
              name={'md-play-skip-back'}
              color="#fff"
              size={22}
              onPress={() => setModalVisible(false)}
            />
            <Icon
              name={isPlay ? 'md-pause' : 'md-play'}
              color="#fff"
              size={22}
              onPress={playmussic}
              style={{marginHorizontal: 60 * unitW}}
            />
            <Icon
              name={'md-play-skip-forward'}
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
  imagesongbottom: {
    height: 48 * unitH,
    width: 48 * unitW,
    marginRight: 8 * unitW,
    borderRadius: 4,
  },
  imagesong: {
    width: 250 * unitW,
    height: 250 * unitH,
    alignItems: 'center',
    marginTop: 60 * unitH,
    borderRadius: 8,
  },
  modalsong: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20 * unitW,
  },
  nameplay: {
    fontWeight: 'bold',
    marginTop: 16 * unitH,
    fontSize: 20,
  },
  singerplay: {
    color: '#fff',
    marginTop: 4 * unitH,
  },
  plpau: {
    flexDirection: 'row',
    paddingTop: 16 * unitH,
    height: 60 * unitH,
    // margintop:60
  },
});
