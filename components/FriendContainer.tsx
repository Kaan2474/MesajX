import { StyleSheet, View, Text } from 'react-native';
import ProfilePicture from '@/components/ProfilePicture';

type Props = {
    initials: string,
    isOnline: boolean,
    name: string,
};

export default function FriendContainer({ initials, isOnline, name } : Props) {

  return (
    <View style={styles.item}>

        <ProfilePicture initials={initials} isOnline={isOnline}/>
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: 360,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#4A5160",
    marginTop: 10,
    alignItems: "center",
  },
  nameContainer: {
    left: 30
  },
  name: {
    fontSize: 16,
    color: "#E5E9F0",
  },
});
