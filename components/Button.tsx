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
          <View style={styles.iconContainer}>
            <MaterialIcons name="login" size={24} color="#fff"/>
          </View>
        </Pressable>
      </View>
    );
  }

  if (label === "Registrieren") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <View style={styles.iconContainer}>
            <MaterialIcons name="login" size={24} color="#fff"/>
          </View>
        </Pressable>
      </View>
    );
  }

  if (label === 'Weiter') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <View style={styles.iconContainer}>
            <MaterialIcons name="navigate-next" color={"#fff"} size={24}/>
          </View>
        </Pressable>
      </View>
    );
  }

  if (label === 'Passwort zurücksetzen') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <View style={styles.iconContainer}>
            <MaterialIcons name="lock-reset" color={"#fff"} size={24}/>
          </View>
        </Pressable>
      </View>
    );
  }

  if (label === 'Speichern') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
          <View style={styles.iconContainer}>
            <Feather name="save" color={"#fff"} size={24}/>
          </View>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
        <View style={styles.iconContainer}>
          <AntDesign name="adduser" color={"#fff"} size={24} />
        </View>
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
  },
  iconContainer: {
    position: "absolute",
    right: 15
  },
});
