import { useState, useRef } from 'react';
import { View, Text, TextInput, Image, Pressable, StyleSheet } from 'react-native';

export const RegistrationScreen = ({ userRegistered }) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const passwordInput = useRef();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  function showPassword() {
    passwordInput.current.focus();
    setIsPasswordHidden(state => (state.isPasswordHidden = !isPasswordHidden));
  }

  return (
    <>
      <Image
        style={styles.background}
        source={require('../assets/img/background-image-min.jpg')}
      />
      <View style={styles.registrationForm}>
        <View style={styles.userPhoto}>
          <Pressable style={styles.btnAddPhoto}>
            <Image
              style={styles.btnAddPhotoIcon}
              source={require('../assets/img/button-add-photo-min.png')}
            />
          </Pressable>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={[styles.input, isLoginFocused && styles.inputFocused]}
            textContentType='username'
            value={login}
            onChangeText={setLogin}
            onFocus={() => setIsLoginFocused(true)}
            onBlur={() => setIsLoginFocused(false)}
            placeholder='Логін'
          />
          <TextInput
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            textContentType='emailAddress'
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            placeholder='Адреса електронної пошти'
          />
          <View>
            <TextInput
              style={[styles.input, styles.inputLast, isPasswordFocused && styles.inputFocused]}
              ref={passwordInput}
              textContentType='password'
              secureTextEntry={isPasswordHidden}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              placeholder='Пароль'
            />
            <Pressable
              style={styles.btnPasswordShow}
              onPress={showPassword}>
              <Text style={styles.btnPasswordShowLabel}>Показати</Text>
            </Pressable>
          </View>
          <Pressable style={styles.btnRegister}>
            <Text style={styles.btnRegisterLabel}>Зареєструватися</Text>
          </Pressable>
          <Pressable
            style={styles.btnLogin}
            onPress={() => userRegistered(true)}>
            <Text style={styles.btnLoginLabel}>Вже є акаунт? Увійти</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  registrationForm: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',

    paddingTop: 92,
    paddingBottom: 29,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
  },

  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  userPhoto: {
    position: 'absolute',
    alignSelf: 'center',
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  btnAddPhoto: {
    position: 'absolute',
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },

  btnAddPhotoIcon: {
    width: '100%',
    height: '100%',
  },

  title: {
    marginBottom: 32,
    fontFamily: 'Roboto-500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',
  },

  input: {
    marginBottom: 16,
    padding: 16,

    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',

    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },

  inputLast: {
    marginBottom: 43,
  },

  inputFocused: {
    borderColor: '#FF6C00',
  },

  btnPasswordShow: {
    position: 'absolute',
    top: 22,
    right: 16,
  },

  btnPasswordShowLabel: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },

  btnRegister: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },

  btnRegisterLabel: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  btnLogin: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
  },

  btnLoginLabel: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
});
