import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const SPACE_AFTER_CONTENT: number = 0.024 * SCREEN_HEIGHT;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackgroundColor,
        alignItems: "center"
    },
    headingContainer: {
        height: "20%",
        width: "100%",
        justifyContent: "space-around",
        marginTop: SCREEN_HEIGHT * 0.04739336493 ,
        marginBottom: SCREEN_HEIGHT * 0.07701421801,
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
        marginBottom: SCREEN_HEIGHT * 0.01184834123
      }
})

export default {
    styles,
    SPACE_AFTER_CONTENT,
    SCREEN_HEIGHT,
    SCREEN_WIDTH
}