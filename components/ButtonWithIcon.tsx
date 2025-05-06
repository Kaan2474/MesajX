import { StyleSheet, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  type: string
}

export default function ButtonWithIcon({ type }: Props) {

  const ROUTER = useRouter();

  if (type === "Neuer Chat") {
    return (
      <Pressable style={styles.newChatButton} onPress={() => ROUTER.navigate("/newMessage")}>
        <Entypo name="new-message" size={24} color="#30C5FF" />
      </Pressable>
    );
  }

  else if (type === "Zurück") {
    return (
      <Pressable style={styles.backButton} onPress={() => ROUTER.back()}>
        <Ionicons name="chevron-back" size={30} color="#30C5FF" />
      </Pressable>
    );
  }

  else {
    return (
      <></>
    );
  }
}

const styles = StyleSheet.create({
  newChatButton: {
    width: 44,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#4A5160",
  },
  backButton: {
    position: "absolute",
    left: 7.5,
  }
});
