import { StyleSheet, View } from 'react-native';
import universalStyles from '@/utils/universalStyles';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import colors from '@/utils/colors';
import fonts from '@/utils/fonts';
import buttonStyles from '@/utils/buttonStyles';

export default function BackToLogin() {

  return (
    <View style={styles.backToLoginContainer}>
        <Ionicons name="chevron-back" size={buttonStyles.iconSizes.bigButton} color={colors.text}/>
        <Link style={styles.backToLoginText} href={"/passwordForgotten_2"}>Zurück zum Login</Link>
  </View>
  );
}

const styles = StyleSheet.create({
    backToLoginContainer: {
        flexDirection: "row",
        alignItems: "center",
        top: 0.024 * universalStyles.SCREEN_HEIGHT, //20.256
      },
      backToLoginText: {
        color: colors.text,
        fontSize: fonts.size.text
      },
});
