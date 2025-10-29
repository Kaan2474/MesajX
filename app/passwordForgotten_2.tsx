import React from 'react';
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import Button from '@/components/buttons/Button';
import buttonStyles from '@/utils/buttonStyles';
import fonts from '@/utils/fonts';
import universalStyles from '@/utils/universalStyles';
import ProgressBar from '@/components/ProgressBar';
import BackToLogin from '@/components/BackToLogin';
import progressBarStyles from '@/utils/progressBarStyles';
import router from './navigation/router';
import TwoFactorAuthInput from '@/components/TwoFactorAuthInput';


export default function PasswordForgotton_2() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={universalStyles.styles.container}>

        <Logo withBackButton={false}/>

        <View style={universalStyles.styles.headingContainer}>
          <Text style={universalStyles.styles.headingText}>Passwort zurücksetzen</Text>
          <Text style={universalStyles.styles.descriptionText}>Ein Code wurde an <Text style={{fontWeight: 700}}>k.hsrglu@gmx.de</Text> gesendet. Bitte überprüfe dein Postfach, um fortzufahren.</Text>
        </View>

        <TwoFactorAuthInput />

        <BackToLogin />
        <ProgressBar count={3} firstBarColor='#4A5160' secondBarColor='#30C5FF' thirdBarColor='#4A5160' barHeight={progressBarStyles.height} barWidth={progressBarStyles.widths.small} barRadius={progressBarStyles.borderRadius}/>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
