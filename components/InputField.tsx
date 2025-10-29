import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TextInput } from "react-native-gesture-handler";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '@/utils/colors';

type Props = {
  inputFieldHeight: number;
  inputFieldWidth: number;
  iconType: string;
  placeholder: string;
};

//Normale Eingabefelder --> Höhe: 40 und Breite: 360
//Eingabefeld für Beschreibung --> Höhe: 55 und Breite: 360
//Eingabefeld mit Button daneben --> Höhe: 40 und Breite: 303.5

export default function Inputfield({ inputFieldHeight, inputFieldWidth, iconType, placeholder }: Props) {

  return (
    <GestureHandlerRootView style={[styles.inputContainer, {height: inputFieldHeight}, {width: inputFieldWidth}]}>
        <View style={styles.iconContainer}>
          {!! (iconType === "Vorname" || iconType ==="Nachname") && <FontAwesome name="user" size={18} color={colors.inputfieldIcon} />}
          {!! (iconType === "Email") && <MaterialIcons name="email" size={18} color={colors.inputfieldIcon} />}
          {!! (iconType === "Nutzername") && <FontAwesome name="user-circle-o" size={18} color={colors.inputfieldIcon} />}
          {!! (iconType === "Passwort" || iconType ==="Passwort bestätigen") && <FontAwesome6 name="lock" size={18} color={colors.inputfieldIcon} />}
          {!! (iconType === "Suchen") && <AntDesign name="search1" size={18} color={colors.inputfieldIcon} />}
          {!! (iconType === "Beschreibung") && <MaterialIcons name="description" size={18} color={colors.inputfieldIcon} />}
          {!! (iconType === "Chat") && <Ionicons name="chatbubble-ellipses" size={18} color={colors.inputfieldIcon} />}
        </View>
    
        {!! (iconType === "Nutzername") && <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} inputMode='text'
        maxLength={20} placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done'
        selectionColor={"#30C5FF"} />}

        {!! (iconType === "Passwort" || iconType ==="Passwort bestätigen") && <TextInput style={styles.input} inputMode='text'
        placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' secureTextEntry={true}
        selectionColor={"#30C5FF"} />}

        {!! (iconType === "Vorname" || iconType ==="Nachname") && <TextInput style={styles.input} autoCorrect={false} inputMode='text'
        maxLength={40} placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done'
        selectionColor={"#30C5FF"} />}

        {!! (iconType === "Email") && <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false}
        inputMode='email' placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' 
        selectionColor={"#30C5FF"} />}

        {!! (iconType === "Suchen") && <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} inputMode='text'
        placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' selectionColor={"#30C5FF"} />}

        {!! (iconType === "Beschreibung") && <TextInput style={styles.input} autoCorrect={false} inputMode='text' maxLength={85} multiline={true}
        placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' selectionColor={"#30C5FF"} />}

        {!! (iconType === "Chat") && <TextInput style={styles.input} autoCorrect={false} inputMode='text' 
        placeholder={placeholder} placeholderTextColor={"#E5E9F0"} returnKeyType='done' selectionColor={"#30C5FF"} />}
    
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: colors.inputfieldBackground,
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
