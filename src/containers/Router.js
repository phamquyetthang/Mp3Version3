import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabMenu from './TabMenu';
import {ThemeProvider} from 'styled-components/native';
import {useSelector} from 'react-redux';
import SearchForm from '../components/SearchForm';
import Inplaylist from '../components/Inplaylist';
import Stream from './Library/Stream';

const Stack = createStackNavigator();
export default function Router() {
  const theme = useSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}>
          <Stack.Screen name="Main" component={TabMenu} />
          <Stack.Screen
            name="SearchForm"
            component={SearchForm}
            options={{animationTypeForReplace: 'pop'}}
          />
          <Stack.Screen
            name="Stream"
            component={Stream}
            options={{animationTypeForReplace: 'pop'}}
          />
          <Stack.Screen
            name="Inplaylist"
            component={Inplaylist}
            options={{animationTypeForReplace: 'pop'}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
