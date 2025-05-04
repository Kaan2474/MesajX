import { StyleSheet, View, Pressable, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  label: string;
};

export default function SmallButton({ label }: Props) {
  if (label === 'Abmelden') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <View style={styles.iconContainer}>
            <MaterialIcons name="login" size={14} color="#fff"/>
          </View>
        </Pressable>
      </View>
    );
  }

  if (label === 'Einstellungen') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <View style={styles.iconContainer}>
            <Feather name="settings" size={14} color="#fff" />
          </View>
        </Pressable>
      </View>
    );
  }

  if (label === 'Chatten') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="chatbubble-ellipses-outline" size={14} color="#fff" />
          </View>
        </Pressable>
      </View>
    );
  }

  if (label === 'Entfernen') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <View style={styles.iconContainer}>
            <AntDesign name="delete" size={14} color="#fff" />
          </View>
        </Pressable>
      </View>
    );
  }
  return (
    <></>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 40,
  },
  button: {
    borderRadius: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    backgroundColor: "#30C5FF",
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: "700",
  },
  iconContainer: {
    position: "absolute",
    right: 7.5
  },
});
