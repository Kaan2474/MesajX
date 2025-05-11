import { StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BackButton() {

  const ROUTER = useRouter();

  return (
    <Pressable style={styles.backButton} onPress={() => ROUTER.back()}>
      <Ionicons name="chevron-back" size={30} color="#30C5FF" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: 7.5,
  }
});
