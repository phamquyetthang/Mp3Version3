import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {unitH} from '../asset/styles/size';

const AnalogPopup = ({isShow, item, hidden}) => {
  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        hidden();
      }, 1000);
    }
  }, [isShow]);
  return (
    <Modal
      isVisible={isShow}
      style={localStyles.modal}
      animationIn="bounceInDown"
      animationOut="bounceOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      hasBackdrop={false}>
      <View style={localStyles.modalContain}>
        <Text style={localStyles.modalLable}>{item}</Text>
      </View>
    </Modal>
  );
};
const localStyles = StyleSheet.create({
  modal: {justifyContent: 'flex-start'},
  modalContain: {
    padding: 8 * unitH,
    backgroundColor: '#fff',
    marginHorizontal: 20 * unitH,
    borderRadius: 10,
  },
  modalLable: {textAlign: 'center', fontSize: 16},
});

export default AnalogPopup;
