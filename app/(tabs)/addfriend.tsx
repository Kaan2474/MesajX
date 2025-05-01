import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';
import Logo from '@/components/Logo';
import SearchField from '@/components/SearchField';
import BigButton from '@/components/BigButton';

export default function AddFriend() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Logo />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeading}>Finde neue Freunde!</Text>
          <Text style={styles.descriptionText}>Suche nach anderen Nutzern und sende Freundschaftsanfragen, um gemeinsam zu chatten</Text>
        </View>

        <View style={styles.searchBarContainer}>
          <SearchField label="Nutzername"/>
        </View>

        <BigButton label="Freund hinzufügen"/>

        
        <Text style={styles.friendRequestTextContainer}>
          <Text style={styles.friendRequestsText}>Tippe </Text>
          <Link href="/friendRequests" style={[styles.friendRequestsText, {fontWeight: 700}]}>hier </Link>
          <Text style={styles.friendRequestsText}>um deine Freundschaftsanfragen zu sehen</Text>
        </Text>

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
  descriptionContainer: {
    height: 125,
    width: 300,
    justifyContent: "space-between",
    marginTop: 40,
  },
  descriptionHeading: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#E5E9F0",
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "center",
    color: "#E5E9F0"
  },
  searchBarContainer: {
    marginTop: 40,
    marginBottom: 15
  },
  friendRequestTextContainer: {
    width: 250,
    position: "absolute",
    bottom: 50,
  },
  friendRequestsText: {
    color: "#E5E9F0",
    textAlign: "center", 
    fontSize: 16
  },
});
