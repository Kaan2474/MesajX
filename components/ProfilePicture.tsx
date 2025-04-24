import { StyleSheet, View, Text } from 'react-native';

type Props = {
  isOnline: boolean,
  initials: string
};

export default function ProfilePicture({isOnline, initials}: Props) {

  if (isOnline) {
    return (
      <View style={styles.profilePictureContainer}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
        <View style={styles.statusSymbol} />
      </View>
    );
  }

  return (
    <View style={styles.profilePictureContainer}>
      <View style={styles.initialsContainer}>
        <Text style={styles.initials}>{initials}</Text>
      </View>
      <View style={[styles.statusSymbol, {backgroundColor: "#FF4F4F"}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  profilePictureContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#4A5160",
    justifyContent: "center",
    alignItems: "center"
  },
  initialsContainer: {
    top: 3.5,
  },
  initials: {
    color: "#E5E9F0",
    fontSize: 22,
  },
  statusSymbol: {
    height: 7.5,
    width: 7.5,
    borderRadius: 7.5,
    alignSelf: "flex-end",
    top: 5.5,
    right: 5,
    backgroundColor: "#26D07C"
  }
});
