import { useState } from 'react';
import { View, Image, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { RegistrationScreen } from './screens/RegistrationScreen';
import { LoginScreen } from './screens/LoginScreen';

export default function App() {
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-700': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  if (!fontsLoaded) { return null; }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require('./assets/img/background-image-min.jpg')}
        />
        {!isUserRegistered && <RegistrationScreen userRegistered={setIsUserRegistered} />}
        {isUserRegistered && <LoginScreen userRegistered={setIsUserRegistered} />}
        <StatusBar style='auto' />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
