import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import { useRouter } from 'expo-router';
import BigButton from '@/components/BigButton';
import { Link } from 'expo-router';

export default function Login() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo withBackButton={false}/>

        <View style={styles.headingDescriptionContainer}>
            <Text style={styles.heading}>Willkommen bei MesajX!</Text>
            <Text style={styles.description}>deinem modernen Messenger für echte Verbindungen!</Text>
        </View>

        <View style={styles.inputFieldsPasswordForgottenContainer}>
            <View style={styles.marginOnInputField}>
                <InputField inputFieldHeight={40} inputFieldWidth={360} type='Nutzername' placeholder='Nutzername' />
            </View>
            <InputField inputFieldHeight={40} inputFieldWidth={360} type='Passwort' placeholder='Passwort' />
            <Link href={"/passwordForgotten_1"} style={styles.passwordForgotten}>Passwort vergessen?</Link>
        </View>

        <View style={styles.loginButtonRegisterContainer}>
            <BigButton type="Anmelden" placeholder='Anmelden' />
            <Text style={styles.noAccount}>Du hast noch kein Konto? <Link href={"/registration_1"} style={styles.signUp}>Registrieren</Link></Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2227',
    alignItems: "center",
  },
  headingDescriptionContainer: {
    height: 150,
    justifyContent: "space-around",
    marginTop: 40
  },
  heading: {
    color: "#E5E9F0",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center"
  },
  description: {
    color: "#E5E9F0",
    fontSize: 16,
    textAlign: "center"
  },
  inputFieldsPasswordForgottenContainer: {
    marginTop: 40,
  },
  marginOnInputField: {
    marginBottom: 10
  },
  passwordForgotten: {
    color: "#E5E9F0",
    textAlign: "right",
    top: 5
  },
  loginButtonRegisterContainer: {
    marginTop: 20,
    height: 75,
    justifyContent: "space-between"
  },
  noAccount: {
    color: "#E5E9F0",
    textAlign: "center"
  },
  signUp: {
    fontWeight: "700"
  }
});
