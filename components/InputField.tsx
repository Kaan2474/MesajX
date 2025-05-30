import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TextInput } from "react-native-gesture-handler";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '@/utils/colors';

type Props = {
  type: string;
  placeholder: string;
  inputFieldHeight: number;
  inputFieldWidth: number;
};

//Normale Eingabefelder --> Höhe: 40 und Breite: 360
//Eingabefeld für Beschreibung --> Höhe: 55 und Breite: 360
//Eingabefeld mit Button daneben --> Höhe: 40 und Breite: 303.5

export default function InputField({ type, placeholder, inputFieldHeight, inputFieldWidth }: Props) {

  return (
    <GestureHandlerRootView style={[styles.inputContainer, {height: inputFieldHeight}, {width: inputFieldWidth}]}>
        <View style={styles.iconContainer}>
          {!! (type === "Vorname" || type ==="Nachname") && <FontAwesome name="user" size={18} color={colors.inputFieldIconColor} />}
          {!! (type === "Email") && <MaterialIcons name="email" size={18} color={colors.inputFieldIconColor} />}
          {!! (type === "Nutzername") && <FontAwesome name="user-circle-o" size={18} color={colors.inputFieldIconColor} />}
          {!! (type === "Passwort" || type ==="Passwort bestätigen") && <FontAwesome6 name="lock" size={18} color={colors.inputFieldIconColor} />}
          {!! (type === "Suchen") && <AntDesign name="search1" size={18} color={colors.inputFieldIconColor} />}
          {!! (type === "Beschreibung") && <MaterialIcons name="description" size={18} color={colors.inputFieldIconColor} />}
          {!! (type === "Chat") && <Ionicons name="chatbubble-ellipses" size={18} color={colors.inputFieldIconColor} />}
        </View>
    
        {!! (type === "Nutzername") && <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} inputMode='text'
        maxLength={20} placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done'
        selectionColor={"#30C5FF"} />}

        {!! (type === "Passwort" || type ==="Passwort bestätigen") && <TextInput style={styles.input} inputMode='text'
        placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' secureTextEntry={true}
        selectionColor={"#30C5FF"} />}

        {!! (type === "Vorname" || type ==="Nachname") && <TextInput style={styles.input} autoCorrect={false} inputMode='text'
        maxLength={40} placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done'
        selectionColor={"#30C5FF"} />}

        {!! (type === "Email") && <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false}
        inputMode='email' placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' 
        selectionColor={"#30C5FF"} />}

        {!! (type === "Suchen") && <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} inputMode='text'
        placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' selectionColor={"#30C5FF"} />}

        {!! (type === "Beschreibung") && <TextInput style={styles.input} autoCorrect={false} inputMode='text' maxLength={85} multiline={true}
        placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' selectionColor={"#30C5FF"} />}

        {!! (type === "Chat") && <TextInput style={styles.input} autoCorrect={false} inputMode='text' 
        placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' selectionColor={"#30C5FF"} />}
    
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: colors.inputFieldColor,
        alignItems: "center"
    },
    iconContainer: {
        left: 7.5,
        height: 20,
        width: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        color: '#E5E9F0',
        fontSize: 14,
        width: '87.5%',
        left: 15,
      },
});
