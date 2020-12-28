import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import * as shape from 'd3-shape';
import {LineChart, XAxis} from 'react-native-svg-charts';
import {Container} from '../../asset/styles/themes';
import {useDispatch, useSelector} from 'react-redux';
import SongItem from '../../components/SongItem';
import {useIsFocused} from '@react-navigation/native';
import {setIsPlayingAction} from '../../redux/actions';

const Trendy = () => {
  const [state, setState] = useState({
    linePress: null,
  });
  function onLinePress(n) {
    setState({
      ...state,
      linePress: n,
    });
  }
  const data = [
    {
      data: data3,
      svg: {
        stroke: 'purple',
        onPress: () => onLinePress('1'),
        strokeWidth: state.linePress === '1' ? 3 : 1,
      },
    },
    {
      data: data4,
      svg: {
        stroke: 'rgba(34, 128, 176, 0.5)',
        onPress: () => onLinePress('2'),
        strokeWidth: state.linePress === '2' ? 3 : 1,
      },
    },
    {
      data: data2,
      svg: {
        stroke: 'pink',
        onPress: () => onLinePress('3'),
        strokeWidth: state.linePress === '3' ? 3 : 1,
      },
    },
  ];
  const theme = useSelector((state) => state.theme);
  const music = useSelector((state) => state.listMusic);
  const isFocused = useIsFocused();
  const dispatch = useDispatch()
  return (
    <Container theme={theme}>
      <View style={{padding: 4, marginBottom: 12}}>
        <View style={{height: 200, paddingHorizontal: 4}}>
          <LineChart
            style={{height: 200}}
            data={data}
            yAccessor={({item}) => item.value}
            xAccessor={({item}) => item.date}
            contentInset={{top: 20, bottom: 20}}
            curve={shape.curveNatural}>
            {/* <Grid /> */}
          </LineChart>
        </View>
        <XAxis
          data={data3}
          svg={{
            fill: 'hotpink',
            fontSize: 12,
            fontWeight: 'bold',
            rotation: 20,
            originY: 30,
            y: 5,
          }}
          xAccessor={({item}) => item.date}
          // scale={scale.scaleTime}
          numberOfTicks={6}
          style={{marginHorizontal: -15, height: 20}}
          contentInset={{left: 10, right: 25}}
        />
      </View>
      {isFocused && (
        <FlatList
          data={music}
          renderItem={({item}) => (
            <SongItem
              item={item}
              trend={true}
              openInfo={() => null}
              handlePress={() => dispatch(setIsPlayingAction(item))}
              background={state.linePress == item.id ? {backgroundColor: '#9257df'} : {}}
            />
          )}
          keyExtractor={(item) => item.url}
          showsVerticalScrollIndicator={false}
        />
      )}
      <View style={{marginTop: 8}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Top 50</Text>
      </View>
      <TouchableOpacity style={styles.top50}>
        <Image
          source={require('../../asset/image/newfeed11.jpg')}
          style={styles.imagetop50}
        />
        <View>
          <Text style={styles.texttop50}> Top 50 nhạc Việt hay nhất</Text>
          <Text style={{marginTop: 4}}> Lắng nghe những bài hát hay nhất</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.top50, {backgroundColor: '#74b9ff'}]}>
        <Image
          source={require('../../asset/image/newfeed11.jpg')}
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
          source={require('../../asset/image/newfeed11.jpg')}
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
    </Container>
  );
};
const data3 = [
  {value: 15, date: 10},
  {value: 10, date: 11},
  {value: 14, date: 12},
  {value: 15, date: 13},
  {value: 14, date: 14},
  {value: 18, date: 15},
];
const data2 = [
  {value: 15, date: 10},
  {value: 14, date: 11},
  {value: 15, date: 12},
  {value: 13, date: 13},
  {value: 12, date: 14},
  {value: 11, date: 15},
];
const data4 = [
  {value: 12, date: 10},
  {value: 14, date: 11},
  {value: 15, date: 12},
  {value: 14, date: 13},
  {value: 17, date: 14},
  {value: 15, date: 15},
];

export default Trendy;
/* <View style={{height: 200}}>
          <AreaChart
            style={{flex: 1}}
            data={data3}
            svg={{
              fill: 'rgba(134, 65, 244, 0.5)',
              onPress: () => console.log('bam chart 1'),
              // stroke: 'rgba(134, 65, 244)',
            }}
            contentInset={{top: 20, bottom: 20}}
            curve={shape.curveNatural}
            yAccessor={({item}) => item.value}
            xAccessor={({item}) => item.date}
          />
          <AreaChart
            style={StyleSheet.absoluteFill}
            data={data4}
            svg={{
              fill: 'rgba(34, 128, 176, 0.5)',
              onPress: () => console.log('bam chart 2'),
            }}
            contentInset={{top: 20, bottom: 20}}
            curve={shape.curveNatural}
            yAccessor={({item}) => item.value}
            xAccessor={({item}) => item.date}
          />
        </View> */
