import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListAlbums from '../../../components/ListAlbums';
import Playmusic from '../Playmusic';
import {stylescreen} from './styled';

const Dashboard = () => {
  const [musicFeatured, setMusicFeatured] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isplaying, setIsplaying] = useState(false);
  const [song, setSong] = useState({
    idsong: 0,
    namesong: '',
    urlsong: '',
    singersong: '',
    imagesong: '',
    time:0
  });
  useEffect(() => {
    async function getdata() {
      const respone = await fetch(
        'https://fakeserver-musicaap.herokuapp.com/music',
      );
      const jsonData = await respone.json();
      
      setMusicFeatured(jsonData);
      setIsloading(true);
    }
    getdata();
  }, []);
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
  return (
    <View style={stylescreen.container}>
      <View style={stylescreen.DashboardHeader}>
        <Icon name="align-left" size={28} />
      </View>
      <Text style={stylescreen.DashboardTextFeatured}>Featured Tracks</Text>
      <ListAlbums articles={musicFeatured} isloading={isloading} Song={song} setSong={setSong} setIsplaying={setIsplaying} setModalVisible={setModalVisible}/>
      <Text sstyle={stylescreen.DashboardTextFeatured}>-</Text>
      <ListAlbums articles={musicFeatured} isloading={isloading} Song={song} setSong={setSong} setIsplaying={setIsplaying} setModalVisible={setModalVisible}/>
      
      <Text style={stylescreen.DashboardTextFeatured}>Top Tracks</Text>
      <View style={stylescreen.DashboardToptracks}>
        {isloading ? (
          <FlatList
            data={musicFeatured}
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
