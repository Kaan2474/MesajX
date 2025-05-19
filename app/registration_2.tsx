import React from 'react';
import { View, StyleSheet, Text, Dimensions, PixelRatio } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import BigButton from '@/components/BigButton';
import { Link } from 'expo-router';
import ProgressBar from '@/components/ProgressBar';
import ProfilePicture from '@/components/ProfilePicture';
import MediumButton from '@/components/MediumButton';

const { height, width } = Dimensions.get("window");
const scale = width / 320;

const inputFieldAndButtonHeight = height * (1/21.1);
const inputFieldAndButtonWidth = width * (12/13);

const scaleFontSize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export default function Registration_2() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo withBackButton={false}/>

        <View style={styles.headingDescriptionContainer}>
            <Text style={styles.heading}>Fast geschafft!</Text>
            <Text style={styles.description}>Füge noch optional dein Profilbild und eine Profilbeschreibung hinzu! </Text>
        </View>

        <View style={styles.profilePictureAddPhotoButtonContainer}>
            <ProfilePicture size='big' initials='KH'/>
            <MediumButton label='Foto hochladen' />
        </View>

        <View style={styles.inputFieldContainer}>
            <InputField inputFieldHeight={height * (1/15.34545455)} inputFieldWidth={width * (12/13)} type='Beschreibung' placeholder='Beschreibung' />
        </View>

        <BigButton type='Registrieren' placeholder='Registrieren' buttonHeight={inputFieldAndButtonHeight} buttonWidth={inputFieldAndButtonWidth} buttonFunctionality={() => alert("You pressed a Button!")}/>
        <Text style={styles.alreadyHaveAnAccText}>Du hast bereits ein Konto? <Link href={"/login"} style={styles.loginText}>Anmelden</Link></Text>
        <ProgressBar firstBarColor='#4A5160' secondBarColor='#30C5FF'/>


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
    marginBottom: height * 1/1/12.98461538,
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
  profilePictureAddPhotoButtonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: height * 1/9.929411765,
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
