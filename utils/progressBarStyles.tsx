import universalStyles from "./universalStyles";
import { StyleSheet } from "react-native";

const height = universalStyles.SCREEN_HEIGHT * 0.01777251185 //15

const widths = {
    small: universalStyles.SCREEN_WIDTH * 0.2820512821, //110
    big: universalStyles.SCREEN_WIDTH * 0.4230769231, //165
}

const borderRadius = universalStyles.SCREEN_HEIGHT * 0.01777251185 //15

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: universalStyles.SCREEN_WIDTH * 0.90, //351
      justifyContent: "space-between",
      position: "absolute", 
      bottom: universalStyles.SCREEN_HEIGHT * 0.05331753555, //45
    },
  });

export default {
    height,
    widths,
    borderRadius,
    styles
}