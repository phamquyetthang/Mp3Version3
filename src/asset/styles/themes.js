import styled from 'styled-components/native';
import {settingH, settingW, unitH} from './size';

export const darkTheme = {
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: '#151621',
  SECONDARY_BACKGROUND_COLOR: '#151621',
  PRIMARY_TEXT_COLOR: '#fff',
  SECONDARY_TEXT_COLOR: '#ffffff',
  BACKGROUND_PLAYING_BAR: '#2A1B39',
  BUTTON: '#9257df',
  tabBarOptions: {
    activeTintColor: '#9257df',
    inactiveTintColor: '#99999F',
    showIcon: true,
    showLabel: false,
    style: {height: 56 * unitH, backgroundColor: '#0d021a'},
  },
};
export const lightTheme = {
  mode: 'light',
  PRIMARY_BACKGROUND_COLOR:
    'linear-gradient(180deg, rgba(244, 249, 255, 0.0001) 0%, #F4F9FF 26.23%)',
  SECONDARY_BACKGROUND_COLOR: '#F4F9FF',
  PRIMARY_TEXT_COLOR: '#0F1E36',
  SECONDARY_TEXT_COLOR: '#0F1E36',
  BACKGROUND_PLAYING_BAR: '#fff',
  BUTTON: '#33b5e5',
  tabBarOptions: {
    activeTintColor: '#33b5e5',
    inactiveTintColor: 'rgba(15, 30, 54, 0.5)',
    showIcon: true,
    showLabel: false,

    style: {
      height: 56 * unitH,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: 'gray',
    },
  },
};

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
export const ContainerView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
export const Text1 = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${`${16 * unitH}px`};
  font-weight: bold;
`;

export const Text2 = styled.Text`
  color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
  opacity: 0.8;
`;
export const TextTheme = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`;
export const TextWhite = styled.Text`
  color: #fff;
`;
export const PlayingBar = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.BACKGROUND_PLAYING_BAR};
`;
export const ContainerModal = styled.View`
  flex: 0.35;
  background-color: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};
  border-top-left-radius: ${`${8 * unitH}px`};
  border-top-right-radius: ${`${8 * unitH}px`};
`;
export const ModalPlaylist = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
export const ButtonTheme = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.BUTTON};
`;
const s20 = `${20 * unitH}px`;
const s50 = `${50 * unitH}px`;
export const SettingModal = styled.View`
  background-color: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};
  width: ${settingW};
  height: ${settingH};
  margin-right: ${s20};
  margin-top: ${s50};
  align-self: ${(props) => (props.type === 'acc' ? 'flex-start' : 'flex-end')};
  border-radius: 12px;
  border-top-right-radius: ${(props) =>
    props.type === 'acc' ? '12px' : '0px'};
  border-top-left-radius: ${(props) => (props.type === 'acc' ? '0px' : '12px')};
  margin-left: ${(props) => (props.type === 'acc' ? s20 : 0)};
`;
export const BackgroudTheme = styled.View`
  background-color: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};
`;
