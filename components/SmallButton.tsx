import { StyleSheet, View, Pressable, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  functionality: () => void;
};

export default function SmallButton({ functionality } : Props) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={functionality}>
          <Text style={styles.buttonLabel}>Chatten</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="chatbubble-ellipses-outline" size={12} color="#fff" />
          </View>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
  buttonContainer: {
    width: 70,
    height: 40,
  },
  button: {
    borderRadius: 10,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#30C5FF",
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 11,
    fontWeight: "700",
    left: 5
  },
  iconContainer: {
    position: "absolute",
    right: 4
  },
});
