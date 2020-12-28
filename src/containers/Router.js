import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabMenu from './TabMenu';
import {ThemeProvider} from 'styled-components/native';
import {useSelector} from 'react-redux';
import SearchForm from '../components/SearchForm';
import Inplaylist from '../components/Inplaylist';
import Stream from './Library/Stream';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native';
import ListSearch from '../components/ListSearch';

const Stack = createStackNavigator();
export default function Router() {
  const theme = useSelector((state) => state.theme);
  const hasAcc = AsyncStorage.getItem('@hasAcc');
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
        // screenOptions={{
        //   header: () => null,
        // }}
        >
          <Stack.Screen
            name="Main"
            component={TabMenu}
            options={{animationTypeForReplace: 'pop', headerShown: false}}
          />
          {hasAcc && (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{animationTypeForReplace: 'pop', headerShown: false}}
            />
          )}
          <Stack.Screen
            name="SearchForm"
            component={SearchForm}
            options={{animationTypeForReplace: 'pop', headerShown: false}}
          />
          <Stack.Screen
            name="Stream"
            component={Stream}
            options={{animationTypeForReplace: 'pop', headerShown: false}}
          />
          <Stack.Screen
            name="ListSearch"
            component={ListSearch}
            options={{animationTypeForReplace: 'pop', headerShown: false}}
          />
          <Stack.Screen
            name="Inplaylist"
            component={Inplaylist}
            options={{
              animationTypeForReplace: 'pop',
              headerStyle: {
                backgroundColor: '#0d021a',
              },
              headerTintColor: '#fff',
              headerTitle: 'Playlist',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
