import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
  });
  useEffect(() => {
    async function getdata() {
      const respone = await fetch(
        'https://fakeserver-musicaap.herokuapp.com/music',
      );
      const jsonData = await respone.json();
      // console.log(jsonData)
      setMusicFeatured(jsonData);
      setIsloading(true);
    }
    getdata();
  }, []);
  const PlaySong = (id, name, url, singer, image) => {
    setSong({
      idsong: id,
      namesong: name,
      urlsong: url,
      singersong: singer,
      imagesong: image,
    });
    setIsplaying(true);
    setModalVisible(true);
  };
  const renderItem = ({item, index}) => {
    if (index < 11) {
      return (
        <TouchableOpacity
          onPress={() =>
            PlaySong(item.id, item.name, item.url, item.singer, item.image)
          }>
          <View>
            <Image
              source={{uri: item.image}}
              style={stylescreen.DashboardImageFeatured}
            />
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{color: 'gray'}}>{item.singer}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };
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
      <View style={stylescreen.DashboardFeatured}>
        {isloading ? (
          <FlatList
            data={musicFeatured}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        ) : null}
      </View>
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
