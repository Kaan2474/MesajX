import { StyleSheet, View } from 'react-native';
import universalStyles from '@/utils/universalStyles';

type Props = {
  firstBarColor: string
  secondBarColor: string
};

export default function ProgressBar({ firstBarColor, secondBarColor }: Props) {

  return (
    <View style={styles.container}>
        <View style={[styles.bar, {backgroundColor: firstBarColor}]} />
        <View style={[styles.bar, {backgroundColor: secondBarColor}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: universalStyles.SCREEN_WIDTH * 0.90, //351
    justifyContent: "space-between",
    position: "absolute", 
    bottom: universalStyles.SCREEN_HEIGHT * 0.05331753555, //45
  },
  bar: {
    height: universalStyles.SCREEN_HEIGHT * 0.01777251185, //15
    width: universalStyles.SCREEN_WIDTH * 0.4230769231, //165
    borderRadius: universalStyles.SCREEN_HEIGHT * 0.01777251185 //15
  },
});
