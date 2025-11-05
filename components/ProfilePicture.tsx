import { Text, View } from 'react-native';
import profilePictureStyles from '@/utils/profilePictureStyles';

type Props = {
  status?: string,
  height: number,
  width: number,
  radius: number,
  fontSize: number,
  initials: string,
};

export default function ProfilePicture({ status, height, width, radius, fontSize, initials }: Props) {

  return (
    <View style={[profilePictureStyles.styles.profilePictureContainer, {height: height, width: width, borderRadius: radius}]}>
      <View style={profilePictureStyles.styles.initialsContainer}>
        <Text style={[profilePictureStyles.styles.initials, {fontSize: fontSize}]}>{initials}</Text>
      </View>
      {!! (status === "online") && <View style={[profilePictureStyles.styles.statusSymbol, {backgroundColor: "#26D07C"}]} />}
      {!! (status === "offline") && <View style={[profilePictureStyles.styles.statusSymbol, {backgroundColor: "#FF4F4F"}]} />}
    </View>
  );
}
