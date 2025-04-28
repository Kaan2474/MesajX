import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import SearchField from '@/components/SearchField';
import FriendContainer from '@/components/FriendContainer';

const DATA = [
  {
    id: '1',
    name: 'Kaan Hisiroglu',
    isOnline: true,
    initials: "KH"
  },
  {
    id: '2',
    name: 'Alkan Cinar',
    isOnline: false,
    initials: "AC"
  },
  {
    id: '3',
    name: 'Lars Daumann',
    isOnline: false,
    initials: "LD"
  },
  {
    id: '4',
    name: 'Dikran Artin',
    isOnline: true,
    initials: "DA"
  },
  {
    id: '5',
    name: 'Can Akgün',
    isOnline: false,
    initials: "CA"
  },
  {
    id: '6',
    name: 'Luca Quadrelli',
    isOnline: false,
    initials: "LQ"
  },
  {
    id: '7',
    name: 'Mahmoud Ali Khan',
    isOnline: true,
    initials: "MA"
  },
  {
    id: '8',
    name: 'Karim El Kourouchi',
    isOnline: true,
    initials: "KE"
  },
]

export default function Friendslist() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo />

        <View style={styles.searchBarContainer}>
          <SearchField label="Suche Freunde..." />
        </View>

        <FlatList
          data={DATA}
          renderItem={({item}) => <FriendContainer name={item.name} isOnline={item.isOnline} initials={item.initials}/>}
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
    alignItems: 'center',
  },
  searchBarContainer: {
    marginTop: 25,
  },
});
