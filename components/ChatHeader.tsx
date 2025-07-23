import { StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ProfilePicture from './ProfilePicture';
import BackButton from './buttons/BackButton';

export default function ChatHeader() {

  const ROUTER = useRouter();

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <BackButton />

            <View style={styles.profilePictureNameStatusContainer}>
                <ProfilePicture status='online' size='medium' initials="AC" />
                <View style={styles.nameStatusContainer}>
                    <Text style={styles.name}>Alkan Cinar</Text>
                    <Text style={styles.status}>Online</Text>
                </View>
            </View>
        </View>

        <View style={styles.border}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 388.4,
  },
  profilePictureNameStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    right: 7.5
  },
  nameStatusContainer: {
    left: 7.5
  },
  name: {
    color: "#E5E9F0",
    fontSize: 20
  },
  status: {
    color: "#26D07C",
    fontSize: 14,
    top: 2.5
  },
  border: {
    borderTopWidth: 1,
    borderTopColor: "#4A5160",
    width: 388.4,
    marginTop: 15
  }
});
