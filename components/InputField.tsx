import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TextInput } from "react-native-gesture-handler";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  type: string;
  label: string;
};

export default function InputField({ type, label }: Props) {

    if (type === "Nutzername") {
        return (
            <GestureHandlerRootView style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <FontAwesome name="user-circle-o" size={18} color="#30C5FF" />
                </View>
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

    else if (type === "Passwort" || type === "Passwort bestätigen") {
        return (
            <GestureHandlerRootView style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <FontAwesome6 name="lock" size={18} color={"#30C5FF"} />
                </View>
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

    else if (type === "Vorname" || type === "Nachname") {
        return (
            <GestureHandlerRootView style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <FontAwesome name="user" size={18} color={"#30C5FF"} />
                </View>
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

    else if (type === "Email") {
        return (
            <GestureHandlerRootView style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <MaterialIcons name="email" size={18} color={"#30C5FF"} />
                </View>
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

    else if (type === "Beschreibung") {
        return (
            <GestureHandlerRootView style={[styles.inputContainer, {height: 55}]}>
                <View style={styles.iconContainer}>
                    <MaterialIcons name="description" size={18} color={"#30C5FF"} />
                </View>
                <TextInput
                style={styles.input}
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

    else {
        return (
            <></>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 40,
        width: 360,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#4A5160',
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
