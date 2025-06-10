import { StyleSheet } from "react-native";
import universalStyles from "./universalStyles";
import colors from "./colors";

const BASE_WIDTH = 375;

const scaleIconSize = (fontSize: number) => {
    return universalStyles.SCREEN_WIDTH * (fontSize / BASE_WIDTH)
}

const heights = {
    bigButton: universalStyles.SCREEN_HEIGHT * 0.05, //42.2
    mediumButton: universalStyles.SCREEN_HEIGHT * 0.05, //42.2
}

const widths = {
    bigButton: universalStyles.SCREEN_WIDTH * 0.9, //351
    mediumButton: universalStyles.SCREEN_WIDTH * 0.37 //144.3
}

const iconSizes = {
    bigButton: scaleIconSize(18), //18.72
    mediumButton: scaleIconSize(15) //15.6
}

const iconRightPositions = {
    bigButton: universalStyles.SCREEN_WIDTH * 0.03846153846, //15
    mediumButton: universalStyles.SCREEN_WIDTH * 0.01923076923, //7.5
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: colors.buttonBackground,
    },
    label: {
      color: colors.buttonText,
      fontWeight: "700",
    },
    icon: {
      position: "absolute",
    },
  });

export default {
    heights,
    widths,
    iconSizes,
    iconRightPositions,
    styles
};
