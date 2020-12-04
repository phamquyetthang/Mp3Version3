import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {Container, Text1, TextTheme} from '../../asset/styles/themes';
import AnalogPopup from '../../components/AnalogPopup';
import InfoSongPopup from '../../components/InfoSongPopup';
import ListAlbums from '../../components/ListAlbums';
import Loading from '../../components/Loading';
import SongItem from '../../components/SongItem';
import {fetchAsyncAction} from '../../redux/actions';
import {stylescreen} from './styled';

const Dashboard = () => {
  const [state, setState] = useState({
    isLoading: true,
    music: [],
    songInfo: {},
    showInfo: false,
    isShowAlert: false,
    alert: '',
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
  return state.music.length === 0 ? (
    <Loading />
  ) : (
    <Container>
      <View style={stylescreen.DashboardHeader}>
        <TextTheme>
          <Icon name="align-left" size={28} />
        </TextTheme>
      </View>
      <Text1 style={stylescreen.DashboardTextFeatured}>Featured Tracks</Text1>
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
                handleLike={handleLike}
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
    </Container>
  );
};

export default Dashboard;
