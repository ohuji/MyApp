import {useForm, Controller} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import {useLogin} from '../hooks/ApiHooks';
import {Input, Button, Text, Card} from '@rneui/themed';

const loginForm = () => {
  const {isLoggedIn, setIsLoggedIn, setUser} = useContext(MainContext);
  const {postLogin} = useLogin();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {username: '', password: ''},
  });

  const logIn = async (loginCredentials) => {
    try {
      console.log('Button pressed', isLoggedIn);
      const userData = await postLogin(loginCredentials);

      await AsyncStorage.setItem('userToken', userData.token);

      setUser(userData.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('login error', error);
    }
  };

  return (
    <Card>
      <Card.Title>Login Form</Card.Title>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="username"
            autoCapitalize="none"
            errorMessage={
              (errors.username?.type === 'required' && (
                <Text>This is required</Text>
              )) ||
              (errors.username?.type === 'minLength' && (
                <Text>Min 3 chars</Text>
              ))
            }
          />
        )}
        name="username"
      />

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder="password"
            errorMessage={errors.password && <Text>This is required</Text>}
          />
        )}
        name="password"
      />

      <Button title="Sign in" onPress={handleSubmit(logIn)} />
    </Card>
  );
};

export default loginForm;
