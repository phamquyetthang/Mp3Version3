import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {unitH} from '../../asset/styles/size';
import Local from './Local';
import Stream from './Stream';
import {View} from 'react-native';
import { styles } from './styles';

const Tab = createMaterialTopTabNavigator();

const Library = () => {
  return (
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
        />
        <Tab.Screen
          name="Local"
          component={Local}
          options={{title: 'Thiết bị'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Library;
