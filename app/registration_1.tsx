import React from 'react';
import { View, StyleSheet, Text, Dimensions, PixelRatio } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import { useRouter } from 'expo-router';
import BigButton from '@/components/BigButton';
import { Link } from 'expo-router';
import ProgressBar from '@/components/ProgressBar';
import colors from './utils/colors';
import universalStyles from './utils/universalStyles';

const { height, width } = Dimensions.get("window");

const inputFieldAndButtonHeight = height * (1/21.1);
const inputFieldAndButtonWidth = width * (12/13);


export default function Registration_1() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={universalStyles.styles.container}>

        <Logo withBackButton={false}/>

        <View style={universalStyles.styles.headingContainer}>
            <Text style={universalStyles.styles.headingText}>Registriere dich bei MesajX!</Text>
            <Text style={universalStyles.styles.descriptionText}>Erstelle in wenigen Schritten dein Konto und starte deine Unterhaltung mit Freunden und Familie.</Text>
        </View>

        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={inputFieldAndButtonHeight} inputFieldWidth={inputFieldAndButtonWidth} type='Vorname' placeholder='Vorname' />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={inputFieldAndButtonHeight} inputFieldWidth={inputFieldAndButtonWidth} type='Nachname' placeholder='Nachname' />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={inputFieldAndButtonHeight} inputFieldWidth={inputFieldAndButtonWidth} type='Email' placeholder='Email' />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={inputFieldAndButtonHeight} inputFieldWidth={inputFieldAndButtonWidth} type='Nutzername' placeholder='Nutzername' />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={inputFieldAndButtonHeight} inputFieldWidth={inputFieldAndButtonWidth} type='Passwort' placeholder='Passwort' />
        </View>

        <BigButton type='Weiter' placeholder='Weiter' buttonHeight={inputFieldAndButtonHeight} buttonWidth={inputFieldAndButtonWidth} buttonFunctionality={navigateToNextRegistrationPage}/>
        <Text style={styles.alreadyHaveAnAccText}>Du hast bereits ein Konto? <Link href={"/login"} style={styles.loginText}>Anmelden</Link></Text>
        <ProgressBar firstBarColor='#30C5FF' secondBarColor='#4A5160'/>


      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  alreadyHaveAnAccText: {
    color: colors.textColor,
    textAlign: "center",
    top: universalStyles.SPACE_AFTER_CONTENT
  },
  loginText: {
    fontWeight: "700"
  }
});


function navigateToNextRegistrationPage(): void {
    const router = useRouter();
    router.navigate("/registration_2")
}