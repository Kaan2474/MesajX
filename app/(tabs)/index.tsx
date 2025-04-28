import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SearchField from '@/components/SearchField';
import ButtonWithIcon from '@/components/ButtonWithIcon';

import Logo from '@/components/Logo';
import ChatContainer from '@/components/ChatContainer';

const DATA = [
  {
    id: '1',
    name: 'Kaan Hisiroglu',
    message: "Hallo, wie geht es dir?",
    time: "22:17",
    unreadMessages: "2",
    isOnline: true,
    initials: "KH"
  },
  {
    id: '2',
    name: 'Alkan Cinar',
    message: "Kommst du morgen?",
    time: "19:47",
    unreadMessages: "3",
    isOnline: false,
    initials: "AC"
  },
  {
    id: '3',
    name: 'Oktay Cetin',
    message: "Ey ich muss dir was erzählen",
    time: "gestern",
    unreadMessages: "2",
    isOnline: true,
    initials: "OC"
  },
  {
    id: '4',
    name: 'Mahmoud Ali Khan',
    message: "Ich habe große Neuigkeiten",
    time: "Montag",
    unreadMessages: "4",
    isOnline: true,
    initials: "MA"
  },
  {
    id: '5',
    name: 'Karim El Kourouchi',
    message: "Kommst du mit nach Marokko?",
    time: "Sonntag",
    unreadMessages: "10",
    isOnline: true,
    initials: "KE"
  },
  {
    id: '6',
    name: 'Oguzhan Akgün',
    message: "Training morgen?",
    time: "Samstag",
    unreadMessages: "7",
    isOnline: false,
    initials: "OG"
  },
  {
    id: '7',
    name: 'Mikail Akgün',
    message: "Bist du noch krank?",
    time: "Freitag",
    unreadMessages: "1",
    isOnline: true,
    initials: "MA"
  },
  {
    id: '8',
    name: 'Lars Daumann',
    message: "Habe deine Bewerbung abgeg...",
    time: "Donnerstag",
    unreadMessages: "5",
    isOnline: false,
    initials: "LD"
  },
  {
    id: '9',
    name: 'Dikran Artin',
    message: "Kannst du meine Aufgabe mac...",
    time: "Mittwoch",
    unreadMessages: "2",
    isOnline: false,
    initials: "DA"
  },
  {
    id: '10',
    name: 'Selim Tutgun',
    message: "Ich heirate am 20.05",
    time: "Dienstag",
    unreadMessages: "1",
    isOnline: true,
    initials: "ST"
  },
];

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo />

        <View style={styles.searchBarAndButtonWithIconContainer}>
          <SearchField label="Suche Chat..." />
          <ButtonWithIcon />
        </View>

        <FlatList
          data={DATA}
          renderItem={({item}) => <ChatContainer name={item.name} time={item.time} message={item.message} unreadMessages={item.unreadMessages} isOnline={item.isOnline} initials={item.initials}/>}
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