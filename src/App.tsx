import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RealmContext from './contexts/RealmContext';

import Navigation from './router';

const { RealmProvider } = RealmContext;

export default function App() {
  return (
    <SafeAreaProvider>
      <RealmProvider>
        <Navigation />
      </RealmProvider>
    </SafeAreaProvider>
  );
}
