import styled from 'styled-components/native';
import {unitH} from './size';

export const darkTheme = {
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: '#151621',
  PRIMARY_TEXT_COLOR: '#fff',
  SECONDARY_TEXT_COLOR: '#ffffff',
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
  PRIMARY_TEXT_COLOR: '#0F1E36',
  SECONDARY_TEXT_COLOR: '#0F1E36',
  tabBarOptions: {
    activeTintColor: '#3E2AD1',
    inactiveTintColor: 'rgba(15, 30, 54, 0.5)',
    showIcon: true,
    showLabel: false,
    style: {height: 56 * unitH, backgroundColor: '#fff'},
  },
};

export const Container = styled.ScrollView`
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
