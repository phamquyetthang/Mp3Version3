import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';
import Progress from './Progress';
import {useDispatch} from 'react-redux';
import {unitH, unitW} from '../../asset/styles/size';
import {setIsPlayingAction} from '../../redux/actions';
import {
  ContainerView,
  PlayingBar,
  Text1,
  Text2,
  TextTheme,
} from '../../asset/styles/themes';
import IconCustom from '../../components/IconCustom';

export default function Playmusic({
  modalVisible,
  setModalVisible,
  song,
  allMusicstart,
  allMusic,
}) {
  const [isPlay, setIsPlay] = useState(true);

  const dispatch = useDispatch();

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer({
      maxCacheSize: 1048576,
    });
    return true;
  };

  useEffect(() => {
    trackPlayerInit();
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SEEK_TO,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_SKIP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SEEK_TO,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_SKIP,
      ],
      notificationCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SEEK_TO,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_SKIP,
      ],
    });

    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.reset();
      await TrackPlayer.add(allMusic);
      await TrackPlayer.skip(String(song.id));
      await TrackPlayer.play();
    });
    // startSpin;
  }, []);
  useEffect(() => {
    TrackPlayer.skip(String(song.id));
  }, [song]);

  const playmussic = () => {
    if (!isPlay) {
      TrackPlayer.play();
      setIsPlay(true);
      // startSpin;
    } else {
      TrackPlayer.pause();
      setIsPlay(false);
      // stopSpin;
    }
  };
  const nextmusiccc = () => {
    TrackPlayer.skipToNext();
    dispatch(setIsPlayingAction(allMusicstart[song.id]));
  };
  const previousmusiccc = () => {
    if(song.id>1){
    TrackPlayer.skipToPrevious();
    dispatch(setIsPlayingAction(allMusicstart[song.id - 2]));}
  };
  const spinValue = useRef(new Animated.Value(0)).current;
  // const startSpin = () => {
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }),
  ).start();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View>
      <PlayingBar onPress={() => setModalVisible(true)}>
        <Progress time={song.time} isPlay={isPlay} />
        <View style={styles.playingbar}>
          <Image source={{uri: song.image}} style={styles.imagesongbottom} />
          <View>
            <Text1>{song.name}</Text1>
            <TextTheme>{song.singer}</TextTheme>
          </View>
          <View style={styles.control}>
            <IconCustom
              name={'md-heart-outline'}
              size={22}
              handlePress={() => setModalVisible(false)}
            />
            <TextTheme style={{marginHorizontal: 20 * unitW}}>
              <IconCustom
                name={isPlay ? 'md-pause' : 'md-play'}
                size={22}
                handlePress={playmussic}
              />
            </TextTheme>
            <IconCustom
              name={'md-play-skip-forward'}
              size={22}
              handlePress={nextmusiccc}
            />
          </View>
        </View>
      </PlayingBar>
      <Modal animationType="slide" visible={modalVisible}>
        <ContainerView style={{alignItems: 'center'}}>
          <View style={styles.hearderPopup}>
            <IconCustom
              style={styles.lable}
              name="md-chevron-down"
              size={32}
              handlePress={() => setModalVisible(false)}
            />
            <View>
              <Text1 style={styles.title}>{song.name}</Text1>
              <Text2 style={styles.lable}>{song.singer}</Text2>
            </View>
            <IconCustom
              style={styles.options}
              name="md-ellipsis-vertical"
              size={24}
            />
          </View>
          <Animated.Image
            style={[styles.imagesong, {transform: [{rotate: spin}]}]}
            source={{uri: song.image}}
          />
          <View style={styles.slider}>
            <Progress time={song.time} isPlay={isPlay} />
          </View>
          {/* <Button title="ok" onPress={()=>setModalVisible(false)}/> */}
          <TextTheme style={styles.nameplay}>{song.name}</TextTheme>
          <TextTheme style={styles.singerplay}>{song.singer}</TextTheme>
          <View style={styles.plpau}>
            <IconCustom name={'md-shuffle-outline'} size={28} />
            <IconCustom
              name={'md-play-skip-back'}
              size={28}
              handlePress={() => previousmusiccc()}
            />
            <IconCustom
              name={
                isPlay ? 'md-pause-circle-outline' : 'md-play-circle-outline'
              }
              size={80}
              handlePress={playmussic}
              style={{fontWeight: '100'}}
            />
            <IconCustom
              name={'md-play-skip-forward'}
              size={28}
              handlePress={nextmusiccc}
            />
            <IconCustom name={'md-repeat-outline'} size={28} />
          </View>
        </ContainerView>
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
    width: 300 * unitW,
    height: 300 * unitH,
    alignItems: 'center',
    marginTop: 60 * unitH,
    borderRadius: 150 * unitH,
  },
  playingbar: {
    flexDirection: 'row',
    padding: 4 * unitW,
  },
  modalsong: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
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
    // height: 60 * unitH,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 24 * unitW,
    width: '100%',
  },
  hearderPopup: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4 * unitW,
    // backgroundColor: 'red',
    width: '100%',
  },
  title: {
    marginBottom: 6 * unitH,
    marginLeft: 16 * unitW,
  },
  lable: {marginLeft: 16 * unitW},
  options: {
    position: 'absolute',
    right: 4,
  },
  slider: {
    marginTop: 40 * unitH,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginHorizontal: 24 * unitW,
  },
  control: {
    flexDirection: 'row',
    alignSelf: 'center',
    right: 8 * unitW,
    position: 'absolute',
  },
});
