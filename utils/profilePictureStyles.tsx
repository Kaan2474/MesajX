import { StyleSheet } from "react-native"
import universalStyles from "./universalStyles"
import colors from "./colors"

const heights = {
    big: universalStyles.SCREEN_HEIGHT * 0.1184834123, //100
    medium: universalStyles.SCREEN_HEIGHT * 0.0710900474, //60
    small: universalStyles.SCREEN_HEIGHT * 0.05924170616 //50
}

const widths = {
    big: universalStyles.SCREEN_WIDTH * 0.2564102564, //100
    medium: universalStyles.SCREEN_WIDTH * 0.153846154, //60
    small: universalStyles.SCREEN_WIDTH * 0.1282051282 //50
}

const radius = {
    big: 100,
    medium: 60,
    small: 50
}

const styles = StyleSheet.create({
    profilePictureContainer: {
      backgroundColor: colors.color_3,
      justifyContent: "center",
      alignItems: "center"
    },
    initialsContainer: {
      top: 3.5,
    },
    initials: {
      color: colors.color_2,
    },
    statusSymbol: {
      height: 7.5,
      width: 7.5,
      borderRadius: 7.5,
      alignSelf: "flex-end",
      top: 5.5,
      right: 5,
    }
  });

export default {
    heights,
    widths,
    radius,
    styles
}