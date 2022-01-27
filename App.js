import React from 'react';
import {
  Text,
  View,
  ImageBackground
} from 'react-native';
import styling from './assets/styles';


const App = () => {
  return (
    <View style={styling.container}>
      <View style={styling.carContainer}>
        <ImageBackground
          style={styling.image}
          source={require('./assets/images/assets/images/Model3.jpeg')} />
        <View style={styling.titles}>
          <Text style={styling.title}>Model S</Text>
          <Text style={styling.subtitle}>Starting at $63,981</Text>
        </View>
      </View>
    </View>
  )
};

export default App;
