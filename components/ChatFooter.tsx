import { StyleSheet, View } from 'react-native';
import InputField from './InputField';
import IconButton from './IconButton';

export default function ChatFooter() {

  return (
    <View style={styles.container}>
      <InputField inputFieldHeight={40} inputFieldWidth={303.5} type="Chat" placeholder='Hier tippen...' />
      <IconButton type='Nachricht senden' functionality={() => alert("You pressed a button")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 360,
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 15
  }
});
