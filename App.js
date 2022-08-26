import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';
// import {Settings} from 'react-native-feather';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.catLogoView}>
          <ImageBackground
            source={require('../MyApp/assets/kisa.jpg')}
            resizeMode="cover"
            style={styles.catLogo}
          >
            <Text style={styles.logoText}>Homeless kittens</Text>
            {/* <Settings
              stroke="white"
              fill="none"
              strokeWidth="1"
              width={40}
              height={40}
              style={styles.settings}
            />*/}
          </ImageBackground>
        </View>
        <List />
      </SafeAreaView>
      <StatusBar style="auto" backgroundColor="#14A76C" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  catLogo: {
    height: 320,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    margin: 5,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
  },
  logoText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    padding: 10,
    marginBottom: 25,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default App;
