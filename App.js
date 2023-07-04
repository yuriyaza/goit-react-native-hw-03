import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      {!isUserRegistered && <RegistrationScreen userRegistered={setIsUserRegistered} />}
      {isUserRegistered && <LoginScreen userRegistered={setIsUserRegistered} />}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
