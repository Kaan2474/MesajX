import { StyleSheet, View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  imgSource: ImageSource;
};

export default function Logo({ imgSource }: Props) {
  return (
    <View style={styles.imageContainer}>
      <Image source={imgSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    right: 12.5
  },
  image: {
    width: 210,
    height: 65,
  },
});
