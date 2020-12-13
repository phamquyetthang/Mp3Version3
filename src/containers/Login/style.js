import {StyleSheet} from 'react-native';
import {unitH} from '../../asset/styles/size';

export const Styles = StyleSheet.create({
  loginForm: {
    flexDirection: 'column',
    alignContent: 'center',
    paddingTop: 50,
    padding: 16,
  },
  text1: {
    alignSelf: 'center',
    margin: 16,
    fontSize: 20,
    fontWeight: '700',
  },
  button1: {
    width: '100%',
    // backgroundColor: '#feca57',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  inputGroup: {
    marginTop: 16,
    height: 300 * unitH,
    justifyContent: 'space-between',
  },
  checkbox: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
});
