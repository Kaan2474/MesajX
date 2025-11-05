import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const BASE_WIDTH = 375;

const scaleFontSize = (fontSize: number) => {
    return WIDTH * (fontSize / BASE_WIDTH)
  }

const size = {
    heading: scaleFontSize(22),
    text: scaleFontSize(13),
    twoFactorAuthText: scaleFontSize(60),
    bigButton: scaleFontSize(16),
    mediumButton: scaleFontSize(13),
    bigProfilePicture: scaleFontSize(38.5),
    mediumProfilePicture: scaleFontSize(23.25),
    smallProfilePicture: scaleFontSize(19.5)
}

export default {
    size,
};