import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import ProfilePicture from '@/components/ProfilePicture';
import SmallButton from '@/components/SmallButton';
import InputField from '@/components/InputField';
import BigButton from '@/components/BigButton';
import { Tabs } from 'expo-router';
import TabLayout from './(tabs)/_layout';

export default function Settings() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Logo withBackButton={true}/>
        
        <View style={styles.profilePictureAddPictureButtonContainer}>
            <ProfilePicture size='big' initials='KH' />
            <SmallButton label='Foto hochladen' />
        </View>

        <View style={styles.inputFieldsContainer}>
            <View>
                <InputField type="Vorname" label="Vorname" />
            </View>
            <View style={{marginTop: 10}}>
                <InputField type="Nachname" label="Hisiroglu" />
            </View>
            <View style={{marginTop: 10}}>
                <InputField type="Nutzername" label="kaan2474" />
            </View>
            <View style={{marginTop: 10}}>
                <InputField type="Passwort" label="**************" />
            </View>
            <View style={{marginTop: 10}}>
                <InputField type="Beschreibung" label="Hallo, mein Name ist Kaan und meine größte Leidenschaft ist das Programmieren!" />
            </View>
            <View style={{marginTop: 10}}>
                <BigButton label="Speichern" />
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
  inputFieldsContainer: {
    marginTop: 75,
  },
});
