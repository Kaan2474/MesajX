import { StyleSheet, View, Text } from 'react-native';
import ProfilePicture from '@/components/ProfilePicture';

type Props = {
    initials: string,
    status: string,
    time: string,
    name: string,
    message: string,
    unreadMessages: string,
};

export default function ChatContainer({ initials, status, time, name, message, unreadMessages} : Props) {

  return (
    <View style={styles.item}>

        <ProfilePicture status={status} size={"small"} initials={initials}/>

        <View style={styles.nameAndMessageContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.message}>{message}</Text>
        </View>

        <View style={styles.timeAndUnreadMessagesContainer}>
            <Text style={styles.time}>{time}</Text>
            <View style={styles.unreadMessagesContainer}>
                <Text style={styles.unreadMessages}>{unreadMessages}</Text>
            </View>
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    position: "relative",
    width: 360,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#4A5160",
    marginTop: 10,
    alignItems: "center"
  },
  nameAndMessageContainer: {
    width: 200,
    left: 15,
  },
  timeAndUnreadMessagesContainer: {
    position: "absolute",
    right: 0,
    height: 80,
    width: 90,
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  unreadMessagesContainer: {
    backgroundColor: "#30C5FF",
    height: 20,
    width: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    right: 7.5,
    bottom: 10
  },
  time: {
    fontSize: 13,
    color: "#E5E9F0",
    top: 10,
    right: 5
  },
  name: {
    fontSize: 16,
    color: "#E5E9F0",
    bottom: 5
  },
  message: {
    fontSize: 13,
    color: "#E5E9F0",
  },
  unreadMessages: {
    fontSize: 11.5,
    color: "#fff",
  }
});
