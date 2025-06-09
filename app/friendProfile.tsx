import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import ProfilePicture from '@/components/ProfilePicture';
import buttonStyles from '@/utils/buttonStyles';
import BigButton from '@/components/BigButton';
import fonts from '@/utils/fonts';

export default function FriendProfile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo withBackButton={true}/>

        <View style={styles.profilepictureNamesDescriptionContainer}>
          <ProfilePicture size="big" initials={"AC"} />
          <View style={styles.namesContainer}>
            <Text style={styles.name}>Alkan Cinar</Text>
            <Text style={styles.username}>killeralkan6767</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.profileDescription}>Hallo, mein Name ist Alkan und meine größte Leidenschaft ist das Boxen! Ich habe bereits 4 Profikämpfe absolviert</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <BigButton type='Chatten' placeholder='Chatten' buttonHeight={buttonStyles.buttonSizes.mediumButtonHeight} buttonWidth={buttonStyles.buttonSizes.mediumButtonWidth} fontSize={fonts.size.mediumButton} iconSize={buttonStyles.iconSizes.mediumButtonIconSize} iconPosition={buttonStyles.iconPositions.mediumButton} />
          <BigButton type='Entfernen' placeholder='Entfernen' buttonHeight={buttonStyles.buttonSizes.mediumButtonHeight} buttonWidth={buttonStyles.buttonSizes.mediumButtonWidth} fontSize={fonts.size.mediumButton} iconSize={buttonStyles.iconSizes.mediumButtonIconSize} iconPosition={buttonStyles.iconPositions.mediumButton} />
        </View>

        <View style={styles.friendsAndMembershipContainer}>
          <View>
            <Text style={styles.friendsAndMembershipText}>2</Text>
            <Text style={styles.friendsAndMembershipText}>Freunde</Text>
          </View>
          <View>
            <Text style={styles.friendsAndMembershipText}>Mitglied seit</Text>
            <Text style={styles.friendsAndMembershipText}>01.10.2026</Text>
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
