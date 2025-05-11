import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import IconButton from '@/components/IconButton';
import Logo from '@/components/Logo';
import ChatContainer from '@/components/ChatContainer';
import InputField from '@/components/InputField';
import { useRouter } from 'expo-router';

const DATA = [
  {
    id: '1',
    name: 'Kaan Hisiroglu',
    message: "Hallo, wie geht es dir?",
    time: "22:17",
    unreadMessages: "2",
    status: "online",
    initials: "KH"
  },
  {
    id: '2',
    name: 'Alkan Cinar',
    message: "Kommst du morgen?",
    time: "19:47",
    unreadMessages: "3",
    status: "offline",
    initials: "AC"
  },
  {
    id: '3',
    name: 'Oktay Cetin',
    message: "Ey ich muss dir was erzählen",
    time: "gestern",
    unreadMessages: "2",
    status: "online",
    initials: "OC"
  },
  {
    id: '4',
    name: 'Mahmoud Ali Khan',
    message: "Ich habe große Neuigkeiten",
    time: "Montag",
    unreadMessages: "4",
    status: "online",
    initials: "MA"
  },
  {
    id: '5',
    name: 'Karim El Kourouchi',
    message: "Kommst du mit nach Marokko?",
    time: "Sonntag",
    unreadMessages: "10",
    status: "online",
    initials: "KE"
  },
  {
    id: '6',
    name: 'Oguzhan Akgün',
    message: "Training morgen?",
    time: "Samstag",
    unreadMessages: "7",
    status: "offline",
    initials: "OG"
  },
  {
    id: '7',
    name: 'Mikail Akgün',
    message: "Bist du noch krank?",
    time: "Freitag",
    unreadMessages: "1",
    status: "online",
    initials: "MA"
  },
  {
    id: '8',
    name: 'Lars Daumann',
    message: "Habe deine Bewerbung abgeg...",
    time: "Donnerstag",
    unreadMessages: "5",
    status: "offline",
    initials: "LD"
  },
  {
    id: '9',
    name: 'Dikran Artin',
    message: "Kannst du meine Aufgabe mac...",
    time: "Mittwoch",
    unreadMessages: "2",
    status: "offline",
    initials: "DA"
  },
  {
    id: '10',
    name: 'Selim Tutgun',
    message: "Ich heirate am 20.05",
    time: "Dienstag",
    unreadMessages: "1",
    status: "online",
    initials: "ST"
  },
];

export default function Index() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo withBackButton={false}/>

        <View style={styles.searchBarAndButtonWithIconContainer}>
          <InputField inputFieldHeight={40} inputFieldWidth={303.5} type='Suchen' placeholder="Suche Chat..." />
          <IconButton type='Neuer Chat' functionality={navigateToNewMessage}/>
        </View>

        <FlatList
          data={DATA}
          renderItem={({item}) => <ChatContainer name={item.name} time={item.time} message={item.message} unreadMessages={item.unreadMessages} status={item.status} initials={item.initials}/>}
          keyExtractor={item => item.id}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2227',
    alignItems: "center",
  },
  searchBarAndButtonWithIconContainer: {
    marginTop: 25,
    flexDirection: "row",
    width: 360,
    justifyContent: "space-between"
  },
});

function navigateToNewMessage() {
  const ROUTER = useRouter();
  ROUTER.navigate("/newMessage")
}