import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Dashboard from './Dashboard';
import Library from './Library';
import Trendy from './Trendy';
import {StyleSheet, View} from 'react-native';
import Playmusic from './Playmusic';
import {useSelector} from 'react-redux';
import {styles} from '../asset/styles/styled';
import {ContainerView} from '../asset/styles/themes';

const Tab = createMaterialTopTabNavigator();
const TabMenu = () => {
  const playing = useSelector((state) => state.playing);
  const [modalVisible, setModalVisible] = useState(false);
  const allMusicstart = useSelector((state) => state.listMusic);
  const menuTheme = useSelector((state) => state.theme.tabBarOptions);
  const listPlay = useSelector((state) => state.listPlay);
  // console.log('l2', allMusicstart)
  return (
    <ContainerView>
      <View style={styles.playBox}>
        {playing.isPlaying && (
          <Playmusic
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            allMusic={listPlay}
            allMusicstart={allMusicstart}
            song={playing.item}
            setSong={() => null}
          />
        )}
      </View>
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarPosition="bottom"
        tabBarOptions={menuTheme}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="md-planet" style={iconStyle.icon} color={color} />
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
                style={iconStyle.icon}
                color={color}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Download"
          component={Download}
          options={{
            tabBarIcon: ({color}) => (
              <Icon
                name="md-cloud-download"
                style={iconStyle.icon}
                color={color}
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Trendy"
          component={Trendy}
          options={{
            tabBarIcon: ({color}) => (
              <Icon
                name="md-trending-up"
                style={iconStyle.icon}
                color={color}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="person" style={iconStyle.icon} color={color} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </ContainerView>
  );
};

export default TabMenu;
const iconStyle = StyleSheet.create({
  icon: {fontSize: 28, width: 30},
});
