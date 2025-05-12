import ChatHeader from '@/components/ChatHeader';
import { View, FlatList, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ChatMessage from '@/components/ChatMessage';
import ChatFooter from '@/components/ChatFooter';

const DATA = [
    {
      id: '1',
      relation: 'sender',
      message: "Hallo Kaan, gibt es Neuigkeiten?",
      time: "20:24"
    },
    {
      id: '2',
      relation: 'receiver',
      message: "Ja",
      time: "20:40"
    },
    {
      id: '3',
      relation: 'receiver',
      message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
      time: "20:42"
    },
    {
      id: '4',
      relation: 'sender',
      message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
      time: "21:10"
    },
    {
      id: '5',
      relation: 'sender',
      message: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
      time: "21:30"
    },
  ]

export default function Chat() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ChatHeader />

        <View style={styles.spaceFromBorder} />

        <FlatList
          data={DATA}
          renderItem={({item}) => <ChatMessage relation={item.relation} message={item.message} time={item.time}/>}
          keyExtractor={item => item.id}
        />

        <ChatFooter />

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
    marginTop: 25
  },
});
