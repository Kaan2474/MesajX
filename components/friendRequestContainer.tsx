import { StyleSheet, View, Text } from 'react-native';
import ProfilePicture from '@/components/ProfilePicture';

type Props = {
    initials: string,
    name: string,
};

export default function FriendRequestContainer({ initials, name } : Props) {

  return (
    <View style={styles.friendRequestContainer}>
        <View style={styles.profilePictureAndNameContainer}>
            <ProfilePicture size={"medium"} initials={initials}/>
            <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.acceptDeclineContainer}>
            <View style={styles.acceptContainer}>
                <Text style={styles.accept}>Annehmen</Text>
            </View>
            <View style={styles.rejectContainer}>
                <Text style={styles.reject}>Ablehnen</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    friendRequestContainer: {
        borderWidth: 1,
        borderColor: "#4A5160",
        width: 360,
        height: 110,
        marginTop: 25,
        justifyContent: "center"
      },
      profilePictureAndNameContainer: {
        flexDirection: "row",
        alignItems: "center",
        left: 20,
        width: 240,
      },
      name: {
        color: "#E5E9F0",
        fontSize: 16,
        left: 20
      },
      acceptDeclineContainer: {
        position: "absolute",
        right: 0,
        width: 90,
        borderLeftWidth: 1,
        borderLeftColor: "#4A5160",
      },
      acceptContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        borderBottomWidth: 1,
        borderBottomColor: "#4A5160",
      },
      accept: {
        color: "#26D07C",
      },
      rejectContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 55
      },
      reject: {
        color: "#FF4F4F"
      }
});
