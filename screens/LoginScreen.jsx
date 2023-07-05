import { useState, useRef } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, StyleSheet } from 'react-native';

export const LoginScreen = ({ userRegistered }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const passwordInput = useRef();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  function showPassword() {
    passwordInput.current.focus();
    setIsPasswordHidden(state => !state);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-210}>
      <View style={styles.loginForm}>
        <View style={styles.inner}>
          <Text style={styles.title}>Увійти</Text>
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
          <Pressable style={styles.btnLogin}>
            <Text style={styles.btnLoginLabel}>Увійти</Text>
          </Pressable>
          <Pressable
            style={styles.btnRegister}
            onPress={() => userRegistered(false)}>
            <Text style={styles.btnRegisterLabel}>
              Немає акаунту?&nbsp;
              <Text style={styles.btnRegisterLabelUnderline}>Зареєструватися</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  
  loginForm: {
    width: '100%',
    paddingTop: 32,
    paddingBottom: 95,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
  },

  inner: {
    paddingLeft: 16,
    paddingRight: 16,
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

  btnLogin: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },

  btnLoginLabel: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  btnRegister: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },

  btnRegisterLabel: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },

  btnRegisterLabelUnderline: {
    textDecorationLine: 'underline',
  },
});
