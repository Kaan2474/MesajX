import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TextInput } from "react-native-gesture-handler";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  label: string;
};

export default function SearchField({ label }: Props) {

    if (label === "Suche Chat...") {
        return (
            <GestureHandlerRootView style={[styles.inputContainer, {width: 303.5}, {marginRight: 12.5}]}>
                <AntDesign name="search1" size={20} style={styles.icon} />
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

    return (
        <GestureHandlerRootView style={styles.inputContainer}>
            <AntDesign name="search1" size={20} style={styles.icon} />
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
