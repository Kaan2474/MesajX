import { StyleSheet } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

const SPACE_AFTER_CONTENT = 20; //Muss noch für responsiveness geändert werden

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
        marginTop: 40, //Muss noch für responsiveness geändert werden
        marginBottom: 65, //Muss noch für responsiveness geändert werden
      },
      headingText: {
        color: colors.textColor,
        fontSize: fonts.size.fontSize22,
        fontWeight: "700", //Muss noch für responsiveness geändert werden
        textAlign: "center"
      },
      descriptionText: {
        color: colors.textColor,
        textAlign: "center",
        fontSize: fonts.size.fontSize13
      },
      inputFieldMargin: {
        marginBottom: 10 //Muss noch für responsiveness geändert werden
      }
})

export default {
    styles,
    SPACE_AFTER_CONTENT
}