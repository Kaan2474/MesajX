import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#30C5FF',
            headerStyle: {
                backgroundColor: '#1F2227',
            },
            headerShadowVisible: false,
            headerTintColor: "#E5E9F0",
            tabBarStyle: {
                backgroundColor: '#1F2227',
            }
        }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          headerTintColor: "#1F2227",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'chatbubbles-sharp' : 'chatbubbles-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name={focused ? 'user-alt' : 'user'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="friendslist"
        options={{
          title: 'Freunde',
          headerTintColor: "#1F2227",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people-sharp' : 'people-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="addfriend"
        options={{
          title: 'Freund hinzufügen',
          headerTintColor: "#1F2227",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-add-sharp' : 'person-add-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
