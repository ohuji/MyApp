import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {useContext, useEffect} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);

  const checkToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');

      if (userToken === 'abc') {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('checktoken error', error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const logIn = async () => {
    try {
      console.log('Button pressed', isLoggedIn);
      setIsLoggedIn(true);

      await AsyncStorage.setItem('userToken', 'abc');
    } catch (error) {
      console.error('login error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
