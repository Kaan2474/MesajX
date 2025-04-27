import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TextInput } from "react-native-gesture-handler";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  label: string;
};

export default function SearchField({ label }: Props) {

    if (label === "Suche Chat...") {
        return (
            <GestureHandlerRootView style={[styles.inputContainer, {width: 303.5}]}>
              <View style={styles.iconContainer}>
                <AntDesign name="search1" size={16} color={"#30C5FF"} />
              </View>
              <View style={styles.labelContainer}>
                <TextInput
                style={styles.labelText}
                autoCorrect={false}
                inputMode='text'
                placeholder={label}
                placeholderTextColor={"#E5E9F0"}
                returnKeyType='done'
                selectionColor={"#30C5FF"}>
                </TextInput>
              </View>
        </GestureHandlerRootView>
      );
    }

    return (
        <GestureHandlerRootView style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <AntDesign name="search1" size={16} color={"#30C5FF"} />
          </View>
          <View style={styles.labelContainer}>
            <TextInput
              style={styles.labelText}
              autoCapitalize='none'
              autoCorrect={false}
              inputMode='text'
              placeholder={label}
              placeholderTextColor={"#E5E9F0"}
              returnKeyType='done'
              selectionColor={"#30C5FF"}>
            </TextInput>
          </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 40,
        width: 360,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#4A5160',
        alignItems: "center",
    },
    iconContainer: {
      left: 7.5,
    },
    labelContainer: {
      left: 15,
      width: "85%",
    },
    labelText: {
        color: '#E5E9F0',
        fontSize: 14,
      },
});
