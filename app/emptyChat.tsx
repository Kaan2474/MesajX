import ChatHeader from '@/components/ChatHeader';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import ChatFooter from '@/components/ChatFooter';

export default function EmptyChat() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ChatHeader />

        <View style={styles.spaceFromBorder} />
        
        <Text style={styles.description}>Es wurden bisher keine Nachrichten in diesem Chat gesendet. Starte den Chat, indem du die erste Nachricht sendest! <Entypo name="hand" size={18} color="#30C5FF" /></Text>
        <View style={styles.chatInputContainer}>
            <ChatFooter />
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2227',
  },
  spaceFromBorder: {
    marginTop: 100
  },
  description: {
    color: "#E5E9F0",
    textAlign: "center",
    fontSize: 16
  },
  chatInputContainer: {
    flex: 1,
    justifyContent: "flex-end"
  }
});
