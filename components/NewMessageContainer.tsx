import { StyleSheet, View, Text } from 'react-native';
import ProfilePicture from '@/components/ProfilePicture';
import { useRouter } from 'expo-router';
import Button from './buttons/Button';
import buttonStyles from '@/utils/buttonStyles';
import fonts from '@/utils/fonts';

type Props = {
    initials: string,
    status: string,
    name: string,
    functionality: () => void
};

const ROUTER = useRouter();

export default function NewMessageContainer({ initials, status, name, functionality } : Props) {

  return (
    <View style={styles.item}>
      <ProfilePicture status={status} size={"small"} initials={initials}/>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.chatButtonContainer}>
        <Button buttonHeight={buttonStyles.heights.mediumButton} buttonWidth={buttonStyles.widths.mediumButton} fontSize={fonts.size.mediumButton} label='Chatten' iconPosition={buttonStyles.iconRightPositions.mediumButton} iconType='Chatten' iconSize={buttonStyles.iconSizes.mediumButton}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 360,
    height: 80,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4A5160",
    flexDirection: "row",
    alignItems: "center",
  },
  nameContainer: {
    left: 30,
    width: 175,
  },
  name: {
    fontSize: 16,
    color: "#E5E9F0",
  },
  chatButtonContainer: {
    position: "absolute",
    right: 10
  },
});
