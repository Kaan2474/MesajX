import { StyleSheet, View, Pressable, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  if (label === 'Anmelden') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <MaterialIcons name="login" size={24} color="#fff" style={[styles.buttonIcon, {left: 105}]}/>
        </Pressable>
      </View>
    );
  }

  if (label === "Registrieren") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <MaterialIcons name="login" size={24} color="#fff" style={[styles.buttonIcon, {left: 95}]}/>
        </Pressable>
      </View>
    );
  }

  if (label === 'Weiter') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <MaterialIcons name="navigate-next" size={24} style={[styles.buttonIcon, {left: 126}]}/>
        </Pressable>
      </View>
    );
  }

  if (label === 'Passwort zurücksetzen') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <MaterialIcons name="lock-reset" size={24} style={[styles.buttonIcon, {left: 45}]}/>
        </Pressable>
      </View>
    );
  }

  if (label === 'Speichern') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <Feather name="save" size={24} style={[styles.buttonIcon, {left: 97}]}/>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
        <AntDesign name="adduser" size={24} style={[styles.buttonIcon, {left: 67.5}]} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 360,
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
    fontSize: 16,
    fontWeight: "700",
    left: 15
  },
  buttonIcon: {
    color: "#fff",
  },
});
