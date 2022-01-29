import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StatusBar
} from 'react-native';
import styling from './assets/styles';
import CarsList from './components/CarsList';
import Header from './components/Header';


const App = () => {
  return (
    <View style={styling.container}>
      <CarsList />
      <StatusBar />
      <Header />
    </View>
  )
};

export default App;
