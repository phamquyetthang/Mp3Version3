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
  });
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
  }, []);
  function callBackFetch(error, result) {
    if (result) {
      setState({
        ...state,
        music: result,
      });
    }
  }
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
  function handleLike() {
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
  const isFocused = useIsFocused();
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
        {state.music.length !== 0 && isFocused && (
          <FlatList
            data={state.music}
            renderItem={({item}) => (
              <SongItem
                item={item}
                openInfo={() => openInfo(item)}
                handleLike={handleLike}
                handlePress={() => dispatch(setIsPlayingAction(item))}
              />
            )}
            keyExtractor={(item) => item.url}
            showsVerticalScrollIndicator={false}
          />
        )}
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
