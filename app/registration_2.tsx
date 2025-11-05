import InputField from '@/components/InputField';
import Logo from '@/components/Logo';
import ProfilePicture from '@/components/ProfilePicture';
import ProgressBar from '@/components/ProgressBar';
import Button from '@/components/buttons/Button';
import buttonStyles from '@/utils/buttonStyles';
import colors from '@/utils/colors';
import fonts from '@/utils/fonts';
import progressBarStyles from '@/utils/progressBarStyles';
import universalStyles from '@/utils/universalStyles';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import profilePictureStyles from '@/utils/profilePictureStyles';

const DESCRIPTION_INPUTFIELD_HEIGHT = universalStyles.SCREEN_HEIGHT * 0.06516587678 //55

export default function Registration_2() {

  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={universalStyles.styles.container}>

        <Logo withBackButton={true}/>

        <View style={universalStyles.styles.headingContainer}>
            <Text style={universalStyles.styles.headingText}>Fast geschafft!</Text>
            <Text style={universalStyles.styles.descriptionText}>Füge noch optional dein Profilbild und eine Profilbeschreibung hinzu! </Text>
        </View>

        <View style={styles.profilePictureAddPhotoButtonContainer}>
            <ProfilePicture height={profilePictureStyles.heights.big} width={profilePictureStyles.widths.big} radius={profilePictureStyles.radius.big} fontSize={fonts.size.bigProfilePicture} initials='KH'/>
            <Button buttonHeight={buttonStyles.heights.mediumButton} buttonWidth={buttonStyles.widths.mediumButton} fontSize={fonts.size.mediumButton} label='Foto hochladen' iconPosition={buttonStyles.iconRightPositions.addPicture} iconSize={buttonStyles.iconSizes.addPicture} iconType='Foto hochladen'/>
        </View>

        <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={DESCRIPTION_INPUTFIELD_HEIGHT} inputFieldWidth={universalStyles.INPUTFIELD_BUTTON_WIDTH} iconType='Beschreibung' placeholder='Beschreibung' />
        </View>

        <Button buttonHeight={buttonStyles.heights.bigButton} buttonWidth={buttonStyles.widths.bigButton} fontSize={fonts.size.bigButton} label='Registrieren' iconPosition={buttonStyles.iconRightPositions.bigButton} iconType='Registrieren' iconSize={buttonStyles.iconSizes.bigButton}/>
        <Text style={universalStyles.styles.textAfterContent}>Du hast bereits ein Konto? <Link href={"/login"} style={universalStyles.styles.boldText}>Anmelden</Link></Text>
        <ProgressBar count={2} firstBarColor={colors.color_3} secondBarColor={colors.color_4} barHeight={progressBarStyles.height} barWidth={progressBarStyles.widths.big} barRadius={progressBarStyles.borderRadius}/>

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
    marginBottom: universalStyles.SCREEN_HEIGHT * 0.07109004739,
  },
});
