import { View, StyleSheet, Pressable, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import FriendRequestContainer from '@/components/FriendRequestContainer';

const DATA = [
  {
    id: '1',
    name: 'Kaan Hisiroglu',
    initials: "KH"
  },
  {
    id: '2',
    name: 'Alkan Cinar',
    initials: "AC"
  },
  {
    id: '3',
    name: 'Oktay Cetin',
    initials: "OC"
  },
  {
    id: '4',
    name: 'Mahmoud Ali Khan',
    initials: "MA"
  },
  {
    id: '5',
    name: 'Karim El Kourouchi',
    initials: "KE"
  },
  {
    id: '6',
    name: 'Oguzhan Akgün',
    initials: "OG"
  },
  {
    id: '7',
    name: 'Mikail Akgün',
    initials: "MA"
  },
  {
    id: '8',
    name: 'Lars Daumann',
    initials: "LD"
  },
  {
    id: '9',
    name: 'Dikran Artin',
    initials: "DA"
  },
  {
    id: '10',
    name: 'Selim Tutgun',
    initials: "ST"
  },
];

export default function FriendRequests() {

const ROUTER = useRouter();

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>

          <Logo withBackButton={true} />

            <FlatList
            data={DATA}
            renderItem={({item}) => <FriendRequestContainer initials={item.initials} name={item.name}/>}
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
    alignItems: "center"
  },
  logoAndBackbuttonContainer: {
    flexDirection: "row",
    width: 360,
    justifyContent: "center"
  },
  buttonContainer: {
    position: "absolute",
    left: 7.5,
    bottom: 25
  },
});
