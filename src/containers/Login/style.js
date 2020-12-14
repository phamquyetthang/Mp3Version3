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
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  inputGroup: {
    marginTop: 16,
    height: 360 * unitH,
    justifyContent: 'space-between',
  },
  checkbox: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  mutil: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
});
