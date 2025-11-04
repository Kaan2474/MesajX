import InputField from '@/components/InputField';
import Logo from '@/components/Logo';
import ProgressBar from '@/components/ProgressBar';
import Button from '@/components/buttons/Button';
import buttonStyles from '@/utils/buttonStyles';
import colors from '@/utils/colors';
import fonts from '@/utils/fonts';
import progressBarStyles from '@/utils/progressBarStyles';
import universalStyles from '@/utils/universalStyles';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const INPUT_BUTTON_HEIGHT = universalStyles.SCREEN_HEIGHT * 0.05
const INPUT_BUTTON_WIDTH = universalStyles.SCREEN_WIDTH * 0.90


export default function Registration_1() {

  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={universalStyles.styles.container}>

        <Logo withBackButton={false}/>

        <View style={universalStyles.styles.headingContainer}>
            <Text style={universalStyles.styles.headingText}>Registriere dich bei MesajX!</Text>
            <Text style={universalStyles.styles.descriptionText}>Erstelle in wenigen Schritten dein Konto und starte deine Unterhaltung mit Freunden und Familie.</Text>
        </View>

        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField iconType='Vorname' placeholder='Vorname' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField iconType='Nachname' placeholder='Nachname' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField iconType='Email' placeholder='Email' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField iconType='Nutzername' placeholder='Nutzername' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>
        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField iconType='Passwort' placeholder='Passwort' inputFieldHeight={INPUT_BUTTON_HEIGHT} inputFieldWidth={INPUT_BUTTON_WIDTH} />
        </View>

        <Button buttonHeight={buttonStyles.heights.bigButton} buttonWidth={buttonStyles.widths.bigButton} buttonFunctionality={() => router.navigate("/registration_2")} fontSize={fonts.size.bigButton} label='Weiter' iconPosition={buttonStyles.iconRightPositions.bigButton} iconType='Weiter' iconSize={buttonStyles.iconSizes.bigButton}/>
        <Text style={universalStyles.styles.textAfterContent}>Du hast bereits ein Konto? <Link href={"/login"} style={universalStyles.styles.boldText}>Anmelden</Link></Text>
        <ProgressBar count={2} firstBarColor={colors.filledBar} secondBarColor={colors.emptyBar} barHeight={progressBarStyles.height} barWidth={progressBarStyles.widths.big} barRadius={progressBarStyles.borderRadius}/>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
