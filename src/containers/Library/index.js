import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {unitH} from '../../asset/styles/size';
import Local from './Local';
import Stream from './Stream';
import {View} from 'react-native';
import {styles} from './styles';
import {useIsFocused} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Library = () => {
  const isFocused = useIsFocused();

  return (
    isFocused && (
      <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Stream"
        tabBarOptions={{
          activeTintColor: '#3E2AD1',
          inactiveTintColor: '#99999F',
          showIcon: false,
          showLabel: true,
          style: {height: 56 * unitH, backgroundColor: '#231a37'},
        }}>
        <Tab.Screen
          name="Stream"
          component={Stream}
          options={{title: 'Playlist'}}
          isFocused={isFocused}
        />
        <Tab.Screen
          name="Local"
          component={Local}
          options={{title: 'Nhạc yêu thích'}}
        />
      </Tab.Navigator>
    </View>
    )
  );
};

export default Library;
