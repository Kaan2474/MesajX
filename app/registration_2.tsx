import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import BigButton from '@/components/BigButton';
import { Link } from 'expo-router';
import ProgressBar from '@/components/ProgressBar';
import ProfilePicture from '@/components/ProfilePicture';
import universalStyles from '@/utils/universalStyles';
import buttonStyles from '@/utils/buttonStyles';
import fonts from '@/utils/fonts';

const DESCRIPTION_INPUTFIELD_HEIGHT = universalStyles.SCREEN_HEIGHT * 0.06516587678 //55

export default function Registration_2() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={universalStyles.styles.container}>

        <Logo withBackButton={false}/>

        <View style={universalStyles.styles.headingContainer}>
            <Text style={universalStyles.styles.headingText}>Fast geschafft!</Text>
            <Text style={universalStyles.styles.descriptionText}>Füge noch optional dein Profilbild und eine Profilbeschreibung hinzu! </Text>
        </View>

        <View style={styles.profilePictureAddPhotoButtonContainer}>
            <ProfilePicture size='big' initials='KH'/>
            <BigButton type='Foto hochladen' placeholder='Foto hochladen' buttonHeight={buttonStyles.buttonSizes.mediumButtonHeight} buttonWidth={buttonStyles.buttonSizes.mediumButtonWidth} fontSize={fonts.size.mediumButton} iconSize={buttonStyles.iconSizes.mediumButtonIconSize} iconPosition={buttonStyles.iconPositions.mediumButton} />
        </View>

        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={DESCRIPTION_INPUTFIELD_HEIGHT} inputFieldWidth={universalStyles.INPUTFIELD_BUTTON_WIDTH} type='Beschreibung' placeholder='Beschreibung' />
        </View>

        <BigButton type='Registrieren' placeholder='Registrieren' buttonHeight={buttonStyles.buttonSizes.bigButtonHeight} buttonWidth={buttonStyles.buttonSizes.bigButtonHeight} fontSize={fonts.size.bigButton} iconSize={buttonStyles.iconSizes.bigButtonIconSize} iconPosition={buttonStyles.iconPositions.bigButton} />
        <Text style={universalStyles.styles.textAfterContent}>Du hast bereits ein Konto? <Link href={"/login"} style={universalStyles.styles.boldText}>Anmelden</Link></Text>
        <ProgressBar firstBarColor='#4A5160' secondBarColor='#30C5FF'/>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  profilePictureAddPhotoButtonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: universalStyles.SCREEN_HEIGHT * 0.1137440758,
  },
});
