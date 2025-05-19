import { StyleSheet, View, Dimensions } from 'react-native';

type Props = {
  firstBarColor: string
  secondBarColor: string
};

const { height, width } = Dimensions.get("window");

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
    width: width * (12/13),
    justifyContent: "space-between",
    position: "absolute", 
    bottom: height * (1/18.75555556),
  },
  bar: {
    height: height * (1/56.26666667),
    width: width * (11/26),
    borderRadius: height * (1/56.26666667)
  },
});
