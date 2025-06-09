import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import ProfilePicture from '@/components/ProfilePicture';
import buttonStyles from '@/utils/buttonStyles';
import fonts from '@/utils/fonts';
import InputField from '@/components/InputField';
import BigButton from '@/components/BigButton';

export default function Settings() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Logo withBackButton={true}/>
        
        <View style={styles.profilePictureAddPictureButtonContainer}>
            <ProfilePicture size='big' initials='KH' />
            <BigButton type='Foto hochladen' placeholder='Foto hochladen' buttonHeight={buttonStyles.buttonSizes.mediumButtonHeight} buttonWidth={buttonStyles.buttonSizes.mediumButtonWidth} fontSize={fonts.size.mediumButton} iconSize={buttonStyles.iconSizes.mediumButtonIconSize} iconPosition={buttonStyles.iconPositions.mediumButton} />
        </View>

        <View style={styles.inputFieldsSaveButtonContainer}>
            <View>
                <InputField type="Vorname" placeholder="Kaan" inputFieldHeight={40} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
                <InputField type="Nachname" placeholder="Hisiroglu" inputFieldHeight={40} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
                <InputField type="Nutzername" placeholder="kaan2474" inputFieldHeight={40} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
                <InputField type="Passwort" placeholder="**************" inputFieldHeight={40} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
                <InputField type="Beschreibung" placeholder="Hallo, mein Name ist Kaan und meine größte Leidenschaft ist das Programmieren!" inputFieldHeight={55} inputFieldWidth={360}/>
            </View>
            <View style={styles.singleInputFieldSaveButtonContainer}>
              <BigButton type='Speichern' placeholder='Speichern' buttonHeight={buttonStyles.buttonSizes.bigButtonHeight} buttonWidth={buttonStyles.buttonSizes.bigButtonHeight} fontSize={fonts.size.bigButton} iconSize={buttonStyles.iconSizes.bigButtonIconSize} iconPosition={buttonStyles.iconPositions.bigButton} />
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
