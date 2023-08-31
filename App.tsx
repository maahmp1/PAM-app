import {SafeAreaView, StatusBar } from 'react-native';
import PowerUp from './PowerUp';
import React from 'react';


export default function App() {
  return (
    <SafeAreaView >
      <PowerUp/>
      <StatusBar  />
    </SafeAreaView>
  );
}


