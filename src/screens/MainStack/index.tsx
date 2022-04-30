import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EntriesProvider } from '../../providers/EntriesProvider';

import { MainStackParamList } from './types';

import Home from './Home';
import Tutorial from './Tutorial';

const MainStack = createNativeStackNavigator<MainStackParamList>();

function Main() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Tutorial">
        {() => (
          <EntriesProvider>
            <Tutorial />
          </EntriesProvider>
        )}
      </MainStack.Screen>
    </MainStack.Navigator>
  );
}

export default Main;
