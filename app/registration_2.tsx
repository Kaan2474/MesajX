import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import BigButton from '@/components/BigButton';
import { Link } from 'expo-router';
import ProgressBar from '@/components/ProgressBar';
import ProfilePicture from '@/components/ProfilePicture';
import MediumButton from '@/components/MediumButton';
import universalStyles from '@/utils/universalStyles';

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
            <MediumButton label='Foto hochladen' />
        </View>

        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={DESCRIPTION_INPUTFIELD_HEIGHT} inputFieldWidth={universalStyles.INPUTFIELD_BUTTON_WIDTH} type='Beschreibung' placeholder='Beschreibung' />
        </View>

        <BigButton type='Registrieren' placeholder='Registrieren' buttonHeight={universalStyles.INPUTFIELD_BUTTON_HEIGHT} buttonWidth={universalStyles.INPUTFIELD_BUTTON_WIDTH} buttonFunctionality={() => alert("You pressed a Button!")}/>
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
