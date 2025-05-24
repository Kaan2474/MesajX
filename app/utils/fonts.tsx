import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const BASE_WIDTH = 375;

const scaleFontSize = (fontSize: number) => {
    return WIDTH * (fontSize / BASE_WIDTH)
  }

const size = {
    fontSize22: scaleFontSize(22),
    fontSize13: scaleFontSize(13)
}

const weight = {
    semi: '700'
}

export default {
    size,
    weight
};