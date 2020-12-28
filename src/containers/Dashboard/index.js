import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {Container, Text1} from '../../asset/styles/themes';
import AccPopup from '../../components/AccPopup';
import AnalogPopup from '../../components/AnalogPopup';
import IconCustom from '../../components/IconCustom';
import InfoSongPopup from '../../components/InfoSongPopup';
import ListAlbums from '../../components/ListAlbums';
import Loading from '../../components/Loading';
import SettingPopup from '../../components/SettingPopup';
import SongItem from '../../components/SongItem';
import {fetchAsyncAction, setIsPlayingAction} from '../../redux/actions';
import {stylescreen} from './styled';

const Dashboard = () => {
  const [state, setState] = useState({
    isLoading: true,
    music: [],
    songInfo: {},
    showInfo: false,
    isShowAlert: false,
    alert: '',
    openSetting: false,
    openAcc: false,
    userInfo: {
      info: {},
      sign: false,
    },
  });
  const [heart, setHeart] = useState(false);
  const [song, setSong] = useState({
    idsong: 0,
    namesong: '',
    urlsong: '',
    singersong: '',
    imagesong: '',
    time: 0,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    let body_api = {
      endpoint: 'music',
      callback: (error, result) => callBackFetch(error, result),
    };
    dispatch(fetchAsyncAction(body_api));
    // getLocalData();
  }, []);
  function callBackFetch(error, result) {
    if (result) {
      setState({
        ...state,
        music: result,
      });
    }
  }
  const getLocalData = async () => {
    let check = await AsyncStorage.getItem('@hasAcc');
    if (check) {
      let result = await AsyncStorage.getItem('@acc');
      setState({...state, userInfo: {info: JSON.parse(result), sign: true}});
    } else {
      setState({...state, userInfo: {info: {}, sign: false}});
    }
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    getLocalData();
  }, [isFocused]);
  function openInfo(item) {
    setState({
      ...state,
      showInfo: true,
      songInfo: item,
    });
  }
  function hiddenInfo() {
    setState({
      ...state,
      showInfo: false,
      songInfo: {},
    });
  }
  function hiddenAlert() {
    setState({
      ...state,
      isShowAlert: false,
      alert: '',
    });
  }
  async function likee(id) {
    const response = await fetch(
      'https://fakeserver-musicaap.herokuapp.com/music' + '/' + id,
      {
        method: 'PATCH',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          islike: true,
        }),
      },
    )
      .then((response) => {
        response.json().then((response) => {
          console.log(response);
          setHeart(true);
          let body_api = {
            endpoint: 'music',
            callback: (error, result) => callBackFetch(error, result),
          };
          dispatch(fetchAsyncAction(body_api));
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleLike(id) {
    likee(id);
    setState({
      ...state,
      isShowAlert: true,
      alert: 'Đã thêm vào danh sách yêu thích',
    });
  }
  const navigation = useNavigation();
  const openSearch = () => {
    navigation.navigate('SearchForm');
  };
  const openSetting = () => {
    setState({...state, openSetting: true});
  };
  const hiddenSetting = () => {
    setState({...state, openSetting: false});
  };
  const openAcc = () => {
    setState({...state, openAcc: true});
  };
  const hiddenAcc = () => {
    setState({...state, openAcc: false});
  };
  return state.music.length === 0 ? (
    <Loading />
  ) : (
    <Container>
      <View style={stylescreen.DashboardHeader}>
        <IconCustom name="md-person-outline" handlePress={openAcc} />
        <View style={stylescreen.searchSet}>
          <IconCustom name="md-search-outline" handlePress={openSearch} />
          <IconCustom name="md-settings-outline" handlePress={openSetting} />
        </View>
      </View>
      <Text1 style={[stylescreen.DashboardTextFeatured]}>Featured Tracks</Text1>
      <ListAlbums
        articles={state.music}
        isloading={true}
        Song={song}
        setSong={setSong}
      />
      <Text1 style={stylescreen.DashboardTextFeatured}>Top Tracks</Text1>
      <View style={stylescreen.DashboardToptracks}>
        {state.music.length !== 0 ? (
          <FlatList
            data={state.music}
            renderItem={({item}) => (
              <SongItem
                item={item}
                openInfo={() => openInfo(item)}
                handleLike={() => handleLike(item.id)}
                like={state.userInfo.sign}
                handlePress={() => dispatch(setIsPlayingAction(item))}
              />
            )}
            keyExtractor={(item) => item.url}
            showsVerticalScrollIndicator={false}
          />
        ) : null}
      </View>
      {state.songInfo && (
        <InfoSongPopup
          showInfo={state.showInfo}
          item={state.songInfo}
          hiddenInfo={hiddenInfo}
        />
      )}
      <AnalogPopup
        isShow={state.isShowAlert}
        item={state.alert}
        hidden={hiddenAlert}
      />
      <SettingPopup isOpen={state.openSetting} hidden={hiddenSetting} />
      {state.openAcc && <AccPopup isOpen={state.openAcc} hidden={hiddenAcc} />}
    </Container>
  );
};

export default Dashboard;
