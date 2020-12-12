import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  loginForm: {
    flexDirection: 'column',
    alignContent: 'center',
    paddingTop: 50,
    padding: 16,
    backgroundColor: 'white',
  },
  text1: {
    alignSelf: 'center',
    margin: 16,
    fontSize: 20,
    fontWeight: '700',
  },
  button1: {
    width: '100%',
    backgroundColor: '#feca57',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  inputGroup: {marginTop: 16, height: 280, justifyContent: 'space-between'},
  checkbox: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
});
