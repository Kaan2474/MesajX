import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/components/Logo';
import Button from '@/components/buttons/Button';
import InputField from '@/components/InputField';
import buttonStyles from '@/utils/buttonStyles';
import fonts from '@/utils/fonts';
import universalStyles from '@/utils/universalStyles';
import { Link } from 'expo-router';

export default function AddFriend() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={universalStyles.styles.container}>

        <Logo withBackButton={false}/>

        <View style={universalStyles.styles.headingContainer}>
          <Text style={universalStyles.styles.headingText}>Finde neue Freunde!</Text>
          <Text style={universalStyles.styles.descriptionText}>Suche nach anderen Nutzern und sende Freundschaftsanfragen, um gemeinsam zu chatten</Text>
        </View>

        <View style={universalStyles.styles.inputFieldMargin}>
          <InputField inputFieldHeight={universalStyles.INPUTFIELD_BUTTON_HEIGHT} inputFieldWidth={universalStyles.INPUTFIELD_BUTTON_WIDTH} iconType="Suchen" placeholder='Nutzername'/>
        </View>

        <Button buttonHeight={buttonStyles.heights.bigButton} buttonWidth={buttonStyles.widths.bigButton} fontSize={fonts.size.bigButton} label='Freund hinzufügen' iconPosition={buttonStyles.iconRightPositions.bigButton} iconType='Freund hinzufügen' iconSize={buttonStyles.iconSizes.bigButton}/>

        <Link href={"/login"}>Gehe zu Login</Link>

        <View style={styles.friendRequestButton}>
          <Button buttonHeight={buttonStyles.heights.mediumButton} buttonWidth={buttonStyles.widths.mediumButton} fontSize={fonts.size.mediumButton} label='Anfragen' iconPosition={buttonStyles.iconRightPositions.mediumButton} iconType='Anfragen' iconSize={buttonStyles.iconSizes.mediumButton}/>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  friendRequestButton: {
    marginTop: universalStyles.SCREEN_HEIGHT * 0.2251184834 //190
  },
});
