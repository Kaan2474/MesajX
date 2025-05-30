import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import BigButton from '@/components/BigButton';
import { Link } from 'expo-router';
import ProgressBar from '@/components/ProgressBar';
import colors from '@/utils/colors';
import universalStyles from '@/utils/universalStyles';
import navigateToNextRegistrationPage from './navigation/router';

const INPUT_BUTTON_HEIGHT = universalStyles.SCREEN_HEIGHT * 0.05
const INPUT_BUTTON_WIDTH = universalStyles.SCREEN_WIDTH * 0.90


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
            <InputField type='Vorname' placeholder='Vorname' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField type='Nachname' placeholder='Nachname' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField type='Email' placeholder='Email' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField type='Nutzername' placeholder='Nutzername' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField type='Passwort' placeholder='Passwort' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>

        <BigButton type='Weiter' placeholder='Weiter' buttonHeight={INPUT_BUTTON_HEIGHT} buttonWidth={INPUT_BUTTON_WIDTH} buttonFunctionality={navigateToNextRegistrationPage}/>
        <Text style={universalStyles.styles.textAfterContent}>Du hast bereits ein Konto? <Link href={"/login"} style={universalStyles.styles.boldText}>Anmelden</Link></Text>
        <ProgressBar firstBarColor='#30C5FF' secondBarColor='#4A5160'/>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
