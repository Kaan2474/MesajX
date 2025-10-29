import { StyleSheet, View, Text } from 'react-native';

type Props = {
  status?: string,
  size: string,
  initials: string,
};

export default function ProfilePicture({ status, size, initials }: Props) {

  if (size === "small") {
    return (
      <View style={[styles.profilePictureContainer, {height: 50, width: 50, borderRadius: 50}]}>
        <View style={styles.initialsContainer}>
          <Text style={[styles.initials, {fontSize: 20}]}>{initials}</Text>
        </View>
        {!! (status === "online") && <View style={[styles.statusSymbol, {backgroundColor: "#26D07C"}]} />}
        {!! (status === "offline") && <View style={[styles.statusSymbol, {backgroundColor: "#FF4F4F"}]} />}
      </View>
    );
  }

  else if (size === "medium") {
    return (
      <View style={[styles.profilePictureContainer, {height: 60, width: 60, borderRadius: 60}]}>
        <View style={styles.initialsContainer}>
          <Text style={[styles.initials, {fontSize: 24}]}>{initials}</Text>
        </View>
        {!! (status === "online") && <View style={[styles.statusSymbol, {backgroundColor: "#26D07C"}]} />}
        {!! (status === "offline") && <View style={[styles.statusSymbol, {backgroundColor: "#FF4F4F"}]} />}
      </View>
    );
  }

  else if (size === "big") {
    return (
      <View style={[styles.profilePictureContainer, {height: 100, width: 100, borderRadius: 100}]}>
        <View style={styles.initialsContainer}>
          <Text style={[styles.initials, {fontSize: 40}]}>{initials}</Text>
        </View>
        {!! (status === "online") && <View style={[styles.statusSymbol, {backgroundColor: "#26D07C"}]} />}
        {!! (status === "offline") && <View style={[styles.statusSymbol, {backgroundColor: "#FF4F4F"}]} />}
      </View>
    );
  }

  return (
    <></>
  )
}

const styles = StyleSheet.create({
  profilePictureContainer: {
    backgroundColor: "#4A5160",
    justifyContent: "center",
    alignItems: "center"
  },
  initialsContainer: {
    top: 3.5,
  },
  initials: {
    color: "#E5E9F0",
  },
  statusSymbol: {
    height: 7.5,
    width: 7.5,
    borderRadius: 7.5,
    alignSelf: "flex-end",
    top: 5.5,
    right: 5,
  }
});
