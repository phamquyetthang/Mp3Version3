import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabMenu from './TabMenu';
import {ThemeProvider} from 'styled-components/native';
import {useSelector} from 'react-redux';

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
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
