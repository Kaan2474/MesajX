import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import Button from '@/components/buttons/Button';
import buttonStyles from '@/utils/buttonStyles';
import fonts from '@/utils/fonts';
import { Link } from 'expo-router';
import universalStyles from '@/utils/universalStyles';
import colors from '@/utils/colors';

export default function Login() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={universalStyles.styles.container}>

        <Logo withBackButton={false}/>

        <View style={universalStyles.styles.headingContainer}>
          <Text style={universalStyles.styles.headingText}>Willkommen bei MesajX!</Text>
          <Text style={universalStyles.styles.descriptionText}>deinem modernen Messenger für echte Verbindungen!</Text>
        </View>

        <View>
          <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={universalStyles.INPUTFIELD_BUTTON_HEIGHT} inputFieldWidth={universalStyles.INPUTFIELD_BUTTON_WIDTH} iconType='Nutzername' placeholder='Nutzername' />
          </View>
          <InputField inputFieldHeight={universalStyles.INPUTFIELD_BUTTON_HEIGHT} inputFieldWidth={universalStyles.INPUTFIELD_BUTTON_WIDTH} iconType='Passwort' placeholder='Passwort' />
          <Link href={"/passwordForgotten_1"} style={styles.passwordForgotten}>Passwort vergessen?</Link>
        </View>

        <Button buttonHeight={buttonStyles.heights.bigButton} buttonWidth={buttonStyles.widths.bigButton} fontSize={fonts.size.bigButton} label='Anmelden' iconPosition={buttonStyles.iconRightPositions.bigButton} iconType='Anmelden' iconSize={buttonStyles.iconSizes.bigButton}/>
        <Text style={universalStyles.styles.textAfterContent}>Du hast noch kein Konto? <Link href={"/registration_1"} style={universalStyles.styles.boldText}>Registrieren</Link></Text>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  passwordForgotten: {
    color: colors.text,
    textAlign: "right",
    marginTop: universalStyles.SCREEN_HEIGHT * 0.005924170616, //5
    marginBottom: universalStyles.SCREEN_HEIGHT * 0.01184834123 //9.999999998
  },
});
