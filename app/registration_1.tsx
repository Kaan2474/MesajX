import React from 'react';
import { View, StyleSheet, Text, Dimensions, PixelRatio } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import { useRouter } from 'expo-router';
import BigButton from '@/components/BigButton';
import { Link } from 'expo-router';
import ProgressBar from '@/components/ProgressBar';

const { height, width } = Dimensions.get("window");
const scale = width / 320;

const inputFieldAndButtonHeight = height * (1/21.1);
const inputFieldAndButtonWidth = width * (12/13);

const scaleFontSize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export default function Registration_1() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo withBackButton={false}/>

        <View style={styles.headingDescriptionContainer}>
            <Text style={styles.heading}>Registriere dich bei MesajX!</Text>
            <Text style={styles.description}>Erstelle in wenigen Schritten dein Konto und starte deine Unterhaltung mit Freunden und Familie.</Text>
        </View>

        <View style={styles.inputFieldContainer}>
            <InputField inputFieldHeight={inputFieldAndButtonHeight} inputFieldWidth={inputFieldAndButtonWidth} type='Vorname' placeholder='Vorname' />
        </View>
        <View style={styles.inputFieldContainer}>
            <InputField inputFieldHeight={inputFieldAndButtonHeight} inputFieldWidth={inputFieldAndButtonWidth} type='Nachname' placeholder='Nachname' />
        </View>
        <View style={styles.inputFieldContainer}>
            <InputField inputFieldHeight={inputFieldAndButtonHeight} inputFieldWidth={inputFieldAndButtonWidth} type='Email' placeholder='Email' />
        </View>
        <View style={styles.inputFieldContainer}>
            <InputField inputFieldHeight={inputFieldAndButtonHeight} inputFieldWidth={inputFieldAndButtonWidth} type='Nutzername' placeholder='Nutzername' />
        </View>
        <View style={styles.inputFieldContainer}>
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
  container: {
    flex: 1,
    backgroundColor: '#1F2227',
    alignItems: "center",
  },
  headingDescriptionContainer: {
    height: "20%",
    width: "100%",
    justifyContent: "space-around",
    marginTop: height * 1/21.1,
    marginBottom: height * 1/12.98461538,
  },
  heading: {
    color: "#E5E9F0",
    fontSize: scaleFontSize(18.051282205),
    fontWeight: "700",
    textAlign: "center"
  },
  description: {
    color: "#E5E9F0",
    textAlign: "center",
    fontSize: scaleFontSize(11.48717949)
  },
  inputFieldContainer: {
    marginBottom: height * 1/84.4
  },
  alreadyHaveAnAccText: {
    color: "#E5E9F0",
    textAlign: "center",
    top: height * 1/42.2
  },
  loginText: {
    fontWeight: "700"
  }
});


function navigateToNextRegistrationPage(): void {
    const router = useRouter();
    router.navigate("/registration_2")
}