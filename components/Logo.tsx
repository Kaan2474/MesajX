import { StyleSheet, View, Pressable } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  withBackButton: boolean
}

export default function Logo({withBackButton}: Props) {

  const ROUTER = useRouter();
  const LOGO = require('@/assets/images/Logo.png');

  if (withBackButton) {
    return (
      <View style={styles.logoAndBackButtonContainer}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => ROUTER.back()}>
            <Ionicons name="chevron-back" size={30} color="#30C5FF" />
          </Pressable>
        </View>
  
        <View style={styles.logoContainer}>
          <Image source={LOGO} style={styles.logo} />
        </View>
      </View>
    );
  }
  
  return (
    <View style={styles.logoContainer}>
      <Image source={LOGO} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoAndBackButtonContainer: {
    flexDirection: "row",
    width: 360,
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    left: 7.5,
    bottom: 25
  },
  logoContainer: {
    right: 12.5,
    marginTop: 45,
  },
  logo: {
    width: 210,
    height: 65,
  },
});
