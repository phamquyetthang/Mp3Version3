import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Dashboard from './Dashboard';
import Library from './Library';
import Download from './Download';
import Trendy from './Trendy';
import User from './User';

const Tab = createMaterialTopTabNavigator();
const TabMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarPosition="bottom"
      tabBarOptions={{
        activeTintColor: '#3E2AD1',
        inactiveTintColor: '#99999F',
        showIcon: true,
        showLabel: false,
        style: {height: 56, backgroundColor: '#0d021a'},
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="md-planet" style={{fontSize: 28, color, width: 30}} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="library-music"
              style={{fontSize: 28, color, width: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Download"
        component={Download}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="md-cloud-download"
              style={{fontSize: 28, color, width: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trendy"
        component={Trendy}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="md-trending-up"
              style={{fontSize: 28, color, width: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" style={{fontSize: 26, color, width: 30}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabMenu;
