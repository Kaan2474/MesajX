import { View, Pressable, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons, Octicons } from '@expo/vector-icons';
import colors from '@/utils/colors';
import buttonStyles from '@/utils/buttonStyles';

type Props = {
  buttonHeight: number;
  buttonWidth: number;
  buttonFunctionality?: () => void;
  fontSize: number;
  label: string;
  iconPosition: number;
  iconType: string;
  iconSize: number;
};

export default function Button({ buttonHeight, buttonWidth, buttonFunctionality, fontSize, label, iconPosition, iconType, iconSize }: Props) {
  return (
    <Pressable style={[{height: buttonHeight}, {width: buttonWidth}, buttonStyles.styles.container]} onPress={buttonFunctionality}>
      <Text style={[buttonStyles.styles.label, {fontSize: fontSize}]}>{label}</Text>
      <View style={[buttonStyles.styles.icon, {right: iconPosition}]}>
        {!! (iconType === "Anmelden" || iconType === "Registrieren" || iconType === "Abmelden") && <MaterialIcons name="login" size={iconSize} color={colors.buttonIcon}/>}
        {!! (iconType === "Weiter") && <MaterialIcons name="navigate-next" size={iconSize} color={colors.buttonIcon}/>}
        {!! (iconType === "Passwort zurücksetzen") && <MaterialIcons name="lock-reset" size={iconSize} color={colors.buttonIcon} />}
        {!! (iconType === "Speichern") && <Feather name="save" size={iconSize} color={colors.buttonIcon}/>}
        {!! (iconType === "Freund hinzufügen") && <AntDesign name="adduser" size={iconSize} color={colors.buttonIcon}/>}
        {!! (iconType === "Einstellungen") && <Feather name="settings" size={iconSize} color={colors.buttonIcon} />}
        {!! (iconType === "Chatten") &&  <Ionicons name="chatbubble-ellipses-outline" size={iconSize} color={colors.buttonIcon}/>}
        {!! (iconType === "Entfernen") &&  <AntDesign name="delete" size={iconSize} color={colors.buttonIcon}/>}
        {!! (iconType === "Anfragen") &&  <Octicons name="people" size={iconSize} color={colors.buttonIcon}/>}
        {!! (iconType === "Foto hochladen") &&  <AntDesign name="pluscircleo" size={iconSize} color={colors.buttonIcon}/> }
      </View>
    </Pressable>
  );
}
