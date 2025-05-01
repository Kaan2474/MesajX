import { StyleSheet, View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

const LOGO = require('@/assets/images/Logo.png');

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image source={LOGO} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    right: 12.5,
    marginTop: 45,
  },
  logo: {
    width: 210,
    height: 65,
  },
});
