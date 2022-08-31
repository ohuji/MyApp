import {Button, Text, View, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useUser} from '../hooks/ApiHooks';

const registerForm = () => {
  const {postUser} = useUser();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {username: '', email: '', password: '', full_name: ''},
  });

  const register = async (userData) => {
    try {
      await postUser(userData);
    } catch (error) {
      console.error('Register error', error);
    }
  };

  return (
    <View>
      <Text>Registeration Form</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="username"
          />
        )}
        name="username"
      />
      {errors.username?.type === 'required' && <Text>This is required.</Text>}
      {errors.username?.type === 'minLength' && (
        <Text>Min characters is 3</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          email: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="email"
          />
        )}
        name="email"
      />
      {errors.email?.type === 'required' && <Text>This is required.</Text>}
      {errors.email?.type === 'minLength' && <Text>Min characters is 3</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder="password"
          />
        )}
        name="password"
      />
      {errors.password?.type === 'required' && <Text>This is required.</Text>}
      {errors.password?.type === 'minLength' && (
        <Text>Min characters is 3</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: false,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="full name"
          />
        )}
        name="full_name"
      />
      {errors.full_name?.type === 'required' && <Text>This is required.</Text>}
      {errors.full_name?.type === 'minLength' && (
        <Text>Min characters is 3</Text>
      )}

      <Button title="Register" onPress={handleSubmit(register)} />
    </View>
  );
};

export default registerForm;
