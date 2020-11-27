import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
// import ListAlbums2 from '../../../components/ListAlbums2';

const Trendy = () => {
  const [newreleases, setNewreleases] = useState([]);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    async function getdata() {
      const respone = await fetch(
        'https://fakeserver-musicaap.herokuapp.com/boleromusic',
      );
      const jsonData = await respone.json();
      //   console.log(jsonData)
      setNewreleases(jsonData);
      setIsloading(true);
    }
    getdata();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 8}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Top 50</Text>
      </View>
      <TouchableOpacity style={styles.top50}>
        <Image
          source={require('../../../asset/image/newfeed11.jpg')}
          style={styles.imagetop50}
        />
        <View>
          <Text style={styles.texttop50}> Top 50 nhạc Việt hay nhất</Text>
          <Text style={{marginTop: 4}}> Lắng nghe những bài hát hay nhất</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.top50, {backgroundColor: '#74b9ff'}]}>
        <Image
          source={require('../../../asset/image/newfeed11.jpg')}
          style={styles.imagetop50}
        />
        <View>
          <Text style={styles.texttop50}> Top 50 nhạc trữ tình Bolero</Text>
          <Text style={{marginTop: 4}}>
            {' '}
            Cảm nhận về những bài nhạc vàng, Bolero xưa
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.top50, {backgroundColor: '#fab1a0'}]}>
        <Image
          source={require('../../../asset/image/newfeed11.jpg')}
          style={styles.imagetop50}
        />
        <View>
          <Text style={styles.texttop50}> Top 50 nhạc nước ngoài</Text>
          <Text style={{marginTop: 4}}>
            {' '}
            Đổi gió với những bài nhạc nữa ngoài
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 16}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Mới phát hành</Text>
      </View>
      {/* {isloading?  (<ListAlbums Music={newreleases} isloading={isloading}/>): null} */}
      {/* <ListAlbums2 Music={newreleases} /> */}
    </ScrollView>
  );
};

export default Trendy;
