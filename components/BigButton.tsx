import { StyleSheet, View, Pressable, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  type: string,
  placeholder: string,
  buttonFunctionality: () => void,
};

export default function BigButton({ type, placeholder, buttonFunctionality }: Props) {

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={buttonFunctionality}>
        <Text style={styles.buttonLabel}>{placeholder}</Text>
        <View style={styles.iconContainer}>
          {!! (type === "Anmelden" || type === "Registrieren") && <MaterialIcons name="login" size={18} color="#fff"/>}
          {!! (type === "Weiter") && <MaterialIcons name="navigate-next" color={"#fff"} size={18}/>}
          {!! (type === "Passwort zurücksetzen") && <MaterialIcons name="lock-reset" color={"#fff"} size={18}/>}
          {!! (type === "Speichern") && <Feather name="save" color={"#fff"} size={18}/>}
          {!! (type === "Freund hinzufügen") && <AntDesign name="adduser" color={"#fff"} size={18} />}
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
