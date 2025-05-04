import { StyleSheet, View, Text, Pressable } from 'react-native';
import ProfilePicture from '@/components/ProfilePicture';
import { useRouter } from 'expo-router';

type Props = {
    initials: string,
    status: string,
    name: string,
};

const ROUTER = useRouter();

export default function FriendContainer({ initials, status, name } : Props) {

  return (
    <Pressable style={styles.item} onPress={() => ROUTER.navigate("/friendProfile")}>
      <ProfilePicture status={status} size={"small"} initials={initials}/>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 360,
    height: 80,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4A5160",
    flexDirection: "row",
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
