import React from 'react';
import {StatusBar} from 'expo-status-bar';
import Navigator from './navigators/Navigator';
import {MainProvider} from './contexts/MainContext';
import {Keyboard, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <>
      <MainProvider>
        <TouchableOpacity
          onPress={() => Keyboard.dismiss()}
          style={{flex: 1}}
          activeOpacity={1}
        >
          <Navigator></Navigator>
        </TouchableOpacity>
      </MainProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
