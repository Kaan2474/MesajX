import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import BigButton from '@/components/BigButton';
import MediumButton from '@/components/MediumButton';
import InputField from '@/components/InputField';

export default function AddFriend() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo withBackButton={false}/>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeading}>Finde neue Freunde!</Text>
          <Text style={styles.descriptionText}>Suche nach anderen Nutzern und sende Freundschaftsanfragen, um gemeinsam zu chatten</Text>
        </View>

        <View style={styles.searchUserAddFriendContainer}>
          <View style={styles.searchUserContainer}>
            <InputField inputFieldHeight={40} inputFieldWidth={360} type="Suchen" placeholder='Nutzername'/>
          </View>

          <BigButton label="Freund hinzufügen"/>
        </View>

        <View style={styles.friendRequestButtonContainer}>
          <MediumButton label='Anfragen' />
        </View>

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
  descriptionContainer: {
    height: 125,
    width: 300,
    justifyContent: "space-between",
    marginTop: 40,
  },
  descriptionHeading: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#E5E9F0",
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "center",
    color: "#E5E9F0"
  },
  searchUserAddFriendContainer: {
    marginTop: 85
  },
  searchUserContainer: {
    marginBottom: 15
  },
  friendRequestButtonContainer: {
    marginTop: 190
  },
});
