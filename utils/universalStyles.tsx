import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const INPUTFIELD_BUTTON_WIDTH = SCREEN_WIDTH * 0.90 //351
const INPUTFIELD_BUTTON_HEIGHT = SCREEN_HEIGHT * 0.05 //42.2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackgroundColor,
        alignItems: "center"
    },
    headingContainer: {
        height: "20%",
        width: "90%",
        justifyContent: "space-around",
        marginTop: SCREEN_HEIGHT * 0.04739336493, //40
        marginBottom: SCREEN_HEIGHT * 0.07701421801, //65
      },
      headingText: {
        color: colors.textColor,
        fontSize: fonts.size.fontSize22,
        fontWeight: "700",
        textAlign: "center"
      },
      descriptionText: {
        color: colors.textColor,
        textAlign: "center",
        fontSize: fonts.size.fontSize13
      },
      inputFieldMargin: {
        marginBottom: SCREEN_HEIGHT * 0.01184834123 //9.999999998
      },
      textAfterContent: {
        color: colors.textColor,
        textAlign: "center",
        top: 0.024 * SCREEN_HEIGHT //20.256
      },
      boldText: {
        fontWeight: "700"
      }
})

export default {
    styles,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    INPUTFIELD_BUTTON_HEIGHT,
    INPUTFIELD_BUTTON_WIDTH
}