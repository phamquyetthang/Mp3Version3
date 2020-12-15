import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  darkTheme,
  lightTheme,
  SettingModal,
  TextTheme,
} from '../asset/styles/themes';
import {setDarkModeAction} from '../redux/actions';
import IconCustom from './IconCustom';

const SettingPopup = ({isOpen, hidden}) => {
  const [state, setState] = useState({s1: true});
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const changeColorMode = () => {
    if (mode === 'dark') {
      dispatch(setDarkModeAction(lightTheme));
    } else {
      dispatch(setDarkModeAction(darkTheme));
    }
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
      <SettingModal type="setting">
        <TextTheme style={localStyle.h1}>Setting</TextTheme>
        <View style={localStyle.listSetting}>
          <View style={localStyle.row}>
            <IconCustom
              name="md-moon-sharp"
              handlePress={() => null}
              style={localStyle.icon}
              color="#fff"
            />
            <TextTheme style={localStyle.text}>Chế độ tối</TextTheme>
          </View>
          <Switch
            value={mode === 'dark' ? true : false}
            onValueChange={changeColorMode}
          />
        </View>
        <View style={localStyle.listSetting}>
          <View style={localStyle.row}>
            <IconCustom
              name="md-albums"
              handlePress={() => null}
              style={localStyle.icon}
              color="#fff"
            />
            <TextTheme style={localStyle.text}>Album dạng thẻ</TextTheme>
          </View>
          <Switch
            value={state.s1}
            onValueChange={() => setState({s1: !state.s1})}
          />
        </View>
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
export default SettingPopup;
