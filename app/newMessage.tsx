import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import NewMessageContainer from '@/components/NewMessageContainer';
import InputField from '@/components/InputField';
import { useRouter } from 'expo-router';

const DATA = [
  {
    id: '1',
    name: 'Kaan Hisiroglu',
    status: "online",
    initials: "KH"
  },
  {
    id: '2',
    name: 'Alkan Cinar',
    status: "offline",
    initials: "AC"
  },
  {
    id: '3',
    name: 'Lars Daumann',
    status: "offline",
    initials: "LD"
  },
  {
    id: '4',
    name: 'Dikran Artin',
    status: "online",
    initials: "DA"
  },
  {
    id: '5',
    name: 'Can Akgün',
    status: "offline",
    initials: "CA"
  },
  {
    id: '6',
    name: 'Luca Quadrelli',
    status: "offline",
    initials: "LQ"
  },
  {
    id: '7',
    name: 'Mahmoud Ali Khan',
    status: "online",
    initials: "MA"
  },
  {
    id: '8',
    name: 'Karim El Kourouchi',
    status: "online",
    initials: "KE"
  },
]

export default function NewMessage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo withBackButton={true}/>

        <View style={styles.searchBarContainer}>
          <InputField inputFieldHeight={40} inputFieldWidth={360} type="Suchen" placeholder="Suche Freunde..." />
        </View>

        <FlatList
          data={DATA}
          renderItem={({item}) => <NewMessageContainer name={item.name} status={item.status} initials={item.initials} functionality={navigateToEmptyChat}/>}
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

function navigateToEmptyChat() {
  const ROUTER = useRouter();
  ROUTER.navigate("/emptyChat")
}