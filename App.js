import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { LogBox } from 'react-native';
import Home from './src/screens/Home';
import Gatos from './src/screens/Gatos';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Gatos'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Gatos' component={Gatos} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


