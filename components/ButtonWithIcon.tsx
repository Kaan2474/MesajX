import { StyleSheet, View, Pressable, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

type Props = {
  label: string;
};

export default function ButtonWithIcon({ label }: Props) {

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Entypo name="new-message" size={28} color="#30C5FF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 44,
    height: 46,
  },
  button: {
    borderRadius: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#4A5160",
  },
});
