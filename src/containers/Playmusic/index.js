import React, {useEffect, useState} from 'react';
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
export default function Playmusic({
  modalVisible,
  setModalVisible,
  song,
  setSong,
  allMusic,
}) {
  const [isPlay, setIsPlay] = useState(true);
  const [nextMusic, setNextMusic] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    for (let i = 0; i < allMusic.length; i++) {
      if (song.id === allMusic[i].id) {
        setNextMusic(allMusic[i + 1]);
      }
    }
    TrackPlayer.stop();
    setIsPlay(true);
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: 'trackId',
        url: song.url,
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: song.image,
      });
    });
    TrackPlayer.play();
  }, [song]);

  const playmussic = () => {
    if (!isPlay) {
      TrackPlayer.play();
      setIsPlay(true);
    } else {
      TrackPlayer.pause();
      setIsPlay(false);
    }
  };
  const spinValue = new Animated.Value(0);
  // First set up animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }),
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View>
      <PlayingBar onPress={() => setModalVisible(true)}>
        <Progress time={song.time} isPlay={0} />
        <View style={styles.playingbar}>
          <Image source={{uri: song.image}} style={styles.imagesongbottom} />
          <View>
            <Text1>{song.name}</Text1>
            <TextTheme>{song.singer}</TextTheme>
          </View>
          <View style={styles.control}>
            <TextTheme>
              <Icon
                name={'md-heart-outline'}
                size={22}
                onPress={() => setModalVisible(false)}
              />
            </TextTheme>
            <TextTheme style={{marginHorizontal: 20 * unitW}}>
              <Icon
                name={isPlay ? 'md-pause' : 'md-play'}
                size={22}
                onPress={playmussic}
              />
            </TextTheme>
            <TextTheme>
              <Icon
                name={'md-play-skip-forward'}
                size={22}
                onPress={() => dispatch(setIsPlayingAction(nextMusic))}
              />
            </TextTheme>
          </View>
        </View>
      </PlayingBar>
      <Modal animationType="slide" visible={modalVisible}>
        <ContainerView style={{alignItems: 'center'}}>
          <View style={styles.hearderPopup}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <TextTheme style={styles.lable}>
                <Icon name="md-chevron-down" size={32} />
              </TextTheme>
            </TouchableOpacity>
            <View>
              <Text1 style={styles.title}>{song.name}</Text1>
              <Text2 style={styles.lable}>{song.singer}</Text2>
            </View>
            <TextTheme style={styles.options}>
              <Icon name="md-ellipsis-vertical" size={24} />
            </TextTheme>
          </View>
          <Animated.Image
            style={[styles.imagesong, {transform: [{rotate: spin}]}]}
            source={{uri: song.image}}
          />
          <View style={styles.slider}>
            <Progress time={song.time} isPlay={0} />
          </View>
          {/* <Button title="ok" onPress={()=>setModalVisible(false)}/> */}
          <TextTheme style={styles.nameplay}>{song.name}</TextTheme>
          <TextTheme style={styles.singerplay}>{song.singer}</TextTheme>
          <View style={styles.plpau}>
            <TextTheme>
              <Icon name={'md-shuffle-outline'} size={28} />
            </TextTheme>
            <TextTheme>
              <Icon
                name={'md-play-skip-back'}
                size={28}
                onPress={() => setModalVisible(false)}
              />
            </TextTheme>
            <TextTheme>
              <Icon
                name={
                  isPlay ? 'md-pause-circle-outline' : 'md-play-circle-outline'
                }
                size={80}
                onPress={playmussic}
                style={{fontWeight: '100'}}
              />
            </TextTheme>
            <TextTheme>
              <Icon
                name={'md-play-skip-forward'}
                size={28}
                onPress={() => setModalVisible(false)}
              />
            </TextTheme>
            <TextTheme>
              <Icon name={'md-repeat-outline'} size={28} />
            </TextTheme>
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
