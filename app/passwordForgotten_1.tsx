import React from 'react';
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import InputField from '@/components/InputField';
import Button from '@/components/buttons/Button';
import buttonStyles from '@/utils/buttonStyles';
import fonts from '@/utils/fonts';
import { Link } from 'expo-router';
import universalStyles from '@/utils/universalStyles';
import colors from '@/utils/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProgressBar from '@/components/ProgressBar';
import BackToLogin from '@/components/BackToLogin';
import progressBarStyles from '@/utils/progressBarStyles';

export default function PasswordForgotton_1() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={universalStyles.styles.container}>

        <Logo withBackButton={false}/>

        <View style={universalStyles.styles.headingContainer}>
          <Text style={universalStyles.styles.headingText}>Passwort vergessen?</Text>
          <Text style={universalStyles.styles.descriptionText}>Gib deine E-Mail-Adresse ein, um Anweisungen zum Zurücksetzen deines Passworts zu erhalten.</Text>
        </View>

        <View>
          <View style={universalStyles.styles.inputFieldMargin}>
            <InputField inputFieldHeight={universalStyles.INPUTFIELD_BUTTON_HEIGHT} inputFieldWidth={universalStyles.INPUTFIELD_BUTTON_WIDTH} iconType='Email' placeholder='Email'/>
          </View>
          <Button buttonHeight={buttonStyles.heights.bigButton} buttonWidth={buttonStyles.widths.bigButton} fontSize={fonts.size.bigButton} label='Weiter' iconPosition={buttonStyles.iconRightPositions.bigButton} iconType='Weiter' iconSize={buttonStyles.iconSizes.bigButton}/>
        </View>
        <BackToLogin />
        <ProgressBar count={3} firstBarColor='#30C5FF' secondBarColor='#4A5160' thirdBarColor='#4A5160' barHeight={progressBarStyles.height} barWidth={progressBarStyles.widths.small} barRadius={progressBarStyles.borderRadius}/>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
