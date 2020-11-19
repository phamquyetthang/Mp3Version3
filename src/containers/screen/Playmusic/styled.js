import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
export const stylescreen = StyleSheet.create({
  Readbookbotomplayusic: {
    backgroundColor: 'hotpink',
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    //   zIndex: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  imagesongbottom: {
    height: 40,
    width: 40,
    marginRight: 8,
    borderRadius: 4,
  },
  imagesong: {
    width: 250,
    height: 250,
    alignItems: 'center',
    marginTop: 60,
    borderRadius: 8,
  },
  modalsong: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  nameplay: {
    fontWeight: 'bold',
    marginTop: 16,
    fontSize: 20,
  },
  singerplay: {
    color: '#fff',
    marginTop: 4,
  },
  plpau: {
    flexDirection: 'row',
    paddingTop: 16,
    height: 60,
    // margintop:60
  },
});

export const PlayCard = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  background-color: #1b1d28;
  position: absolute;
  bottom: 0px;
`;
