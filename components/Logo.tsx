import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import BackButton from './buttons/BackButton';

type Props = {
  withBackButton: boolean
}

export default function Logo({ withBackButton }: Props) {

  const LOGO = require('@/assets/images/Logo.png');

  if (withBackButton) {
    return (
      <View style={styles.container}>
        <View style={styles.logoAndBackButtonContainer}>
          <BackButton />
          <Image source={LOGO} style={styles.logo} />
        </View>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45
  },
  logoAndBackButtonContainer: {
    flexDirection: "row",
    width: 388.4,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 210,
    height: 65,
    right: 10
  },
});
