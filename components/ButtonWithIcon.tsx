import { StyleSheet, View, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

export default function ButtonWithIcon() {

  const ROUTER = useRouter();

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => ROUTER.navigate("/newMessage")}>
        <Entypo name="new-message" size={24} color="#30C5FF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 44,
    height: 40,
  },
  button: {
    borderRadius: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#4A5160",
  },
});
