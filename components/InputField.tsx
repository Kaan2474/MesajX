import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TextInput } from "react-native-gesture-handler";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

type Props = {
  label: string;
};

export default function InputField({ label }: Props) {

    if (label === "Nutzername") {
        return (
            <GestureHandlerRootView style={styles.inputContainer}>
                <FontAwesome name="user-circle" size={24} style={styles.icon} />
                <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                inputMode='text'
                maxLength={20}
                placeholder={label}
                placeholderTextColor={"#E5E9F0"}
                returnKeyType='done'
                selectionColor={"#30C5FF"}>
                </TextInput>
            </GestureHandlerRootView>
      );
    }

    if (label === "Passwort" || label === "Passwort bestätigen") {
        return (
            <GestureHandlerRootView style={styles.inputContainer}>
                <FontAwesome6 name="lock" size={20} style={[styles.icon, {left: 13}, {marginRight: 26.5}]} />
                <TextInput
                style={styles.input}
                inputMode='text'
                placeholder={label}
                placeholderTextColor={"#E5E9F0"}
                returnKeyType='done'
                secureTextEntry={true}
                selectionColor={"#30C5FF"}>
                </TextInput>
            </GestureHandlerRootView>
      );
    }

    if (label === "Vorname" || label === "Nachname") {
        return (
            <GestureHandlerRootView style={styles.inputContainer}>
                <Entypo name="user" size={24} style={styles.icon} />
                <TextInput
                style={styles.input}
                autoCorrect={false}
                inputMode='text'
                maxLength={40}
                placeholder={label}
                placeholderTextColor={"#E5E9F0"}
                returnKeyType='done'
                selectionColor={"#30C5FF"}>
                </TextInput>
            </GestureHandlerRootView>
      );
    }

    if (label === "Email") {
        return (
            <GestureHandlerRootView style={styles.inputContainer}>
                <MaterialIcons name="email" size={24} style={styles.icon} />
                <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                inputMode='email'
                placeholder={label}
                placeholderTextColor={"#E5E9F0"}
                returnKeyType='done'
                selectionColor={"#30C5FF"}>
                </TextInput>
            </GestureHandlerRootView>
      );
    }

    if (label === "Beschreibung") {
        return (
            <GestureHandlerRootView style={[styles.inputContainer, {height: 85}]}>
                <MaterialIcons name="description" size={24} style={styles.icon} />
                <TextInput
                style={[styles.input, {height: 75, top: 10}]}
                autoCorrect={false}
                inputMode='text'
                maxLength={85}
                multiline={true}
                placeholder={label}
                placeholderTextColor={"#E5E9F0"}
                returnKeyType='done'
                selectionColor={"#30C5FF"}>
                </TextInput>
            </GestureHandlerRootView>
      );
    }

    return (
        <GestureHandlerRootView style={styles.inputContainer}>
            <FontAwesome6 name="circle-user" size={24} style={styles.icon} />
            <TextInput
            style={styles.input}

            placeholder={label}
            placeholderTextColor={"#E5E9F0"}
            keyboardType="numeric">
            </TextInput>
        </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 46,
        width: 360,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#4A5160',
    },
    icon: {
        top: 12,
        left: 10,
        marginRight: 20,
        color: "#30C5FF",
    },
    input: {
        color: '#E5E9F0',
        fontSize: 16,
        width: '87.5%',
        
      },
});
