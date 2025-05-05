import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import ProfilePicture from '@/components/ProfilePicture';
import MediumButton from '@/components/MediumButton';

export default function Profile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Logo withBackButton={false}/>
        <View style={styles.profilepictureNamesDescriptionContainer}>
          <ProfilePicture size="big" initials={"KH"} />
          <View style={styles.namesContainer}>
            <Text style={styles.name}>Kaan Hisiroglu</Text>
            <Text style={styles.username}>kaan2474</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.profileDescription}>Hallo, mein Name ist Kaan und meine größte Leidenschaft ist das Programmieren!</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <MediumButton label={"Abmelden"}/>
          <MediumButton label={"Einstellungen"}/>
        </View>

        <View style={styles.friendsAndMembershipContainer}>
          <View>
            <Text style={styles.friendsAndMembershipText}>26</Text>
            <Text style={styles.friendsAndMembershipText}>Freunde</Text>
          </View>
          <View>
            <Text style={styles.friendsAndMembershipText}>Mitglied seit</Text>
            <Text style={styles.friendsAndMembershipText}>26.02.2025</Text>
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
  profilepictureNamesDescriptionContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  namesContainer: {
    alignItems: "center",
    top: 10
  },
  name: {
    color: "#E5E9F0",
    fontSize: 16,
  },
  username: {
    color: "#E5E9F0",
    top: 5
  },
  descriptionContainer: {
    marginTop: 75,
    alignItems: "center",
    width: 300
  },
  profileDescription: {
    textAlign: "center",
    fontSize: 18,
    color: "#E5E9F0"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 75,
    width: 355,
    justifyContent: "space-around",
  },
  friendsAndMembershipContainer: {
    flexDirection: "row",
    width: 355,
    marginTop: 50,
    justifyContent: "space-around",
  },
  friendsAndMembershipText: {
    color: "#E5E9F0",
    fontSize: 18,
    textAlign: "center"
  }
});
