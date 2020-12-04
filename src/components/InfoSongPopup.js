import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {unitH, unitW} from '../asset/styles/size';
import Icon from 'react-native-vector-icons/Ionicons';
import {ContainerModal, Text1, Text2, TextTheme} from '../asset/styles/themes';
import Modal from 'react-native-modal';
const InfoSongPopup = ({item, showInfo, hiddenInfo}) => {
  return (
    <Modal
      isVisible={showInfo}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      swipeDirection={['up', 'left', 'right', 'down']}
      onSwipeComplete={hiddenInfo}
      onBackdropPress={hiddenInfo}>
      <ContainerModal>
        {/* <TextTheme style={{textAlign: 'center'}}>
          <Icon name="md-chevron-down" size={22} onPress={hiddenInfo} />
        </TextTheme> */}
        <View style={localStyles.hearderPopup}>
          <Image source={{uri: item.image}} style={localStyles.img} />
          <View>
            <Text1 style={localStyles.title}>{item.name}</Text1>
            <Text2 style={localStyles.lable}>{item.singer}</Text2>
          </View>
        </View>
        <View>
          <OptionItem icon={'md-eye-off-outline'} text="Ẩn bài hát" />
          <OptionItem icon={'md-bookmark-outline'} text="Thêm vào playlist" />
          <OptionItem icon={'md-heart-outline'} text="Thêm vào yêu thích" />
          <OptionItem
            icon={'md-notifications-outline'}
            text="Cài làm nhạc chuông"
          />
        </View>
      </ContainerModal>
    </Modal>
  );
};

const OptionItem = ({icon, text}) => {
  return (
    <View
      style={{margin: 10 * unitH, flexDirection: 'row', alignItems: 'center'}}>
      <TextTheme>
        <Icon name={icon} size={22} />
      </TextTheme>
      <TextTheme style={{fontSize: 14 * unitH, marginLeft: 12 * unitW}}>
        {text}
      </TextTheme>
    </View>
  );
};

export default InfoSongPopup;
const localStyles = StyleSheet.create({
  hearderPopup: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4 * unitW,
    width: '100%',
    marginTop: 6 * unitW,
    paddingBottom: 6 * unitH,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
  },
  img: {
    width: 54 * unitW,
    height: 54 * unitH,
    borderRadius: 4,
    marginLeft: 8 * unitW,
  },
  title: {
    marginBottom: 6 * unitH,
    marginLeft: 16 * unitW,
  },
  lable: {marginLeft: 16 * unitW},
});
