import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {
  SettingModal,
  TextTheme,
  ButtonTheme,
  TextWhite,
} from '../asset/styles/themes';

const AccPopup = ({isOpen, hidden, handlePress = null}) => {
  const [userInfo, setUserInfo] = useState({
    info: {},
    sign: false,
  });
  const getLocalData = async () => {
    let check = await AsyncStorage.getItem('@hasAcc');
    if (check) {
      let result = await AsyncStorage.getItem('@acc');
      if (result) {
        setUserInfo({info: JSON.parse(result), sign: true});
      }
    } else {
      setUserInfo({info: {}, sign: false});
    }
  };
  useEffect(() => {
    getLocalData();
  }, []);
  const navigation = useNavigation();
  const logout = async () => {
    if (userInfo.sign) {
      await AsyncStorage.removeItem('@hasAcc');
    }
    hidden();
    navigation.navigate('Login');
  };
  return (
    <Modal
      isVisible={isOpen}
      style={localStyle.modal}
      animationIn="fadeInRight"
      animationOut="fadeOutRight"
      animationInTiming={200}
      animationOutTiming={200}
      backdropTransitionInTiming={200}
      swipeDirection={['left', 'right']}
      onSwipeComplete={hidden}
      onBackdropPress={hidden}>
      <SettingModal type="acc" style={localStyle.acc}>
        <TextTheme>
          {userInfo.sign
            ? String(userInfo.info?.name)
            : 'Tài khoản chưa đăng nhập'}
        </TextTheme>
        <ButtonTheme style={localStyle.button} onPress={logout}>
          <TextWhite>{userInfo.sign ? 'Đăng xuất' : 'Đăng nhập'}</TextWhite>
        </ButtonTheme>
      </SettingModal>
    </Modal>
  );
};
const localStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
  },
  acc: {
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  button: {
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    position: 'absolute',
    bottom: 12,
  },
  listSetting: {
    padding: 6,
    width: '100%',
    // borderColor: 'gray',
    // borderTopWidth: 0.3,
    // borderBottomWidth: 0.3,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    padding: 4,
    backgroundColor: '#9257df',
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginLeft: 6,
  },
  h1: {
    fontSize: 18,
    margin: 8,
  },
});
export default AccPopup;
