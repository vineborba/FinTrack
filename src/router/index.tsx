import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from '../screens/MainStack';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
