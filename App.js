import React from 'react';
import Navigator from './navigators/Navigator';
import {MainProvider} from './contexts/MainContext';
import {Keyboard, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainProvider>
        <TouchableOpacity
          onPress={() => Keyboard.dismiss()}
          style={{flex: 1}}
          activeOpacity={1}
        >
          <Navigator></Navigator>
        </TouchableOpacity>
      </MainProvider>
    </SafeAreaProvider>
  );
};

export default App;
