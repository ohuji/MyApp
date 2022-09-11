import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useContext, useEffect, useState} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../hooks/ApiHooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {Button} from '@rneui/themed';

const Login = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {getUserByToken} = useUser();
  const [showRegForm, setShowRegForm] = useState(false);

  const checkToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    try {
      if (userToken != null) {
        const userData = await getUserByToken(userToken);
        setIsLoggedIn(true);
        setUser(userData);
      }
    } catch (error) {
      console.error('login token error', error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View>
      {showRegForm ? <RegisterForm /> : <LoginForm />}
      <Button
        title={showRegForm ? 'or sign in' : 'Register a new account'}
        onPress={() => {
          setShowRegForm(!showRegForm);
        }}
      ></Button>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
