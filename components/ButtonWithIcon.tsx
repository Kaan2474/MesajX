import { StyleSheet, View, Pressable, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function ButtonWithIcon() {

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
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
