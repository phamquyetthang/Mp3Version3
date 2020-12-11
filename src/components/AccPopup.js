import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {SettingModal, TextTheme, ButtonTheme} from '../asset/styles/themes';

const AccPopup = ({isOpen, hidden, handlePress = null}) => {
  const hasAcc = AsyncStorage.getItem('@hasAcc');
  const navigation = useNavigation();
  const logout = async () => {
    await AsyncStorage.clear();
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
      onBackdropPress={hidden}>
      <SettingModal type="acc" style={localStyle.acc}>
        {!hasAcc && <TextTheme>Tài khoản chưa đăng nhập</TextTheme>}
        {!hasAcc ? (
          <ButtonTheme style={localStyle.button}>
            <TextTheme>Đăng nhập</TextTheme>
          </ButtonTheme>
        ) : (
          <ButtonTheme style={localStyle.button} onPress={logout}>
            <TextTheme>Đăng xuất</TextTheme>
          </ButtonTheme>
        )}
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
