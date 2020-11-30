import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import ListAlbums from '../../components/ListAlbums';
import Loading from '../../components/Loading';
import {fetchAsyncAction2} from '../../redux/actions';
import Playmusic from '../Playmusic';
import {stylescreen} from './styled';

const Dashboard = () => {
  const [state, setState] = useState({
    isLoading: true,
    music: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [isplaying, setIsplaying] = useState(false);
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
    console.log('k');
    let body_api = {
      endpoint: 'music',
      callback: (error, result) => callBackFetch(error, result),
    };
    dispatch(fetchAsyncAction2(body_api));
  }, []);
  function callBackFetch(error, result) {
    console.log('k2');
    if (result) {
      // console.log('result', result);
      setState({
        ...state,
        music: result,
      });
    }
  }
  const renderItem2 = ({item, index}) => {
    return (
      <TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: item.image}}
            style={stylescreen.DashboardImageToptracks}
          />
          <View>
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{color: 'gray'}}>{item.singer}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return state.music.length === 0 ? (
    <Loading />
  ) : (
    <View style={stylescreen.container}>
      <View style={stylescreen.DashboardHeader}>
        <Icon name="align-left" size={28} />
      </View>
      <Text style={stylescreen.DashboardTextFeatured}>Featured Tracks</Text>
      <ListAlbums
        articles={state.music}
        isloading={true}
        Song={song}
        setSong={setSong}
        setIsplaying={setIsplaying}
        setModalVisible={setModalVisible}
      />
      <Text style={stylescreen.DashboardTextFeatured}>Top Tracks</Text>
      <View style={stylescreen.DashboardToptracks}>
        {state.music.length !== 0 ? (
          <FlatList
            data={state.music}
            renderItem={renderItem2}
            keyExtractor={(item) => item.url}
            showsVerticalScrollIndicator={false}
            // horizontal={true}
          />
        ) : null}
      </View>
      {isplaying ? (
        <Playmusic
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          song={song}
          setSong={setSong}
        />
      ) : null}
    </View>
  );
};

export default Dashboard;
