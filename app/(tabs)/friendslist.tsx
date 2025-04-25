import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import SearchField from '@/components/SearchField';
import FriendContainer from '@/components/FriendContainer';

const PlaceholderImage = require('@/assets/images/Logo.png');

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
]

export default function Profile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo imgSource={PlaceholderImage}/>

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
