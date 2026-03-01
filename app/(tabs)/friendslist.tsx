import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/components/Logo';
import FriendContainer from '@/components/FriendContainer';
import InputField from '@/components/InputField';
import universalStyles from '@/utils/universalStyles';

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

export default function Friendslist() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={universalStyles.styles.container}>

        <Logo withBackButton={false}/>

        <View style={universalStyles.styles.searchBar}>
          <InputField inputFieldHeight={universalStyles.INPUTFIELD_BUTTON_HEIGHT} inputFieldWidth={universalStyles.INPUTFIELD_BUTTON_WIDTH} iconType="Suchen" placeholder='Suche Freunde...' ></InputField>
        </View>

        <FlatList
          data={DATA}
          renderItem={({item}) => <FriendContainer name={item.name} status={item.status} initials={item.initials}/>}
          keyExtractor={item => item.id}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}