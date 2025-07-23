import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import ProfilePicture from '@/components/ProfilePicture';
import buttonStyles from '@/utils/buttonStyles';
import fonts from '@/utils/fonts';
import InputField from '@/components/InputField';
import Button from '@/components/buttons/Button';

export default function Settings() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Logo withBackButton={true}/>
        
        <View style={styles.profilePictureAddPictureButtonContainer}>
            <ProfilePicture size='big' initials='KH' />
            <Button buttonHeight={buttonStyles.heights.mediumButton} buttonWidth={buttonStyles.widths.mediumButton} fontSize={fonts.size.mediumButton} label='Foto hochladen' iconPosition={buttonStyles.iconRightPositions.mediumButton} iconType='Foto hochladen' iconSize={buttonStyles.iconSizes.mediumButton}/>
        </View>

        <View style={styles.inputFieldsSaveButtonContainer}>
            <View>
                <InputField iconType="Vorname" placeholder="Kaan" inputFieldHeight={40} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
                <InputField iconType="Nachname" placeholder="Hisiroglu" inputFieldHeight={40} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
                <InputField iconType="Nutzername" placeholder="kaan2474" inputFieldHeight={40} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
                <InputField iconType="Passwort" placeholder="**************" inputFieldHeight={40} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
                <InputField iconType="Beschreibung" placeholder="Hallo, mein Name ist Kaan und meine größte Leidenschaft ist das Programmieren!" inputFieldHeight={55} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
              <Button buttonHeight={buttonStyles.heights.bigButton} buttonWidth={buttonStyles.widths.bigButton} fontSize={fonts.size.bigButton} label='Speichern' iconPosition={buttonStyles.iconRightPositions.bigButton} iconType='Speichern' iconSize={buttonStyles.iconSizes.bigButton}/>
            </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2227',
    alignItems: 'center',
  },
  profilePictureAddPictureButtonContainer: {
    flexDirection: "row",
    width: 350,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 50,
  },
  inputFieldsSaveButtonContainer: {
    marginTop: 75,
    alignItems: "center"
  },
  singleInputFieldSaveButtonContainer: {
    marginTop: 10
  },
});
