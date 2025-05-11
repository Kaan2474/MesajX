import { StyleSheet, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  type: string;
  functionality: () => void;
}

export default function IconButton({ type, functionality }: Props) {
  return (
    <Pressable style={styles.button} onPress={functionality}>
      {!! (type === "Neuer Chat") && <Entypo name="new-message" size={24} color="#30C5FF"/>}
      {!! (type === "Nachricht senden") && <FontAwesome name="send" size={24} color="#30C5FF"/>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#4A5160",
  },
});
