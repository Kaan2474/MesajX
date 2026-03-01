import colors from '@/utils/colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: colors.color_4,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.color_1,
            }
        }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
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
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people-sharp' : 'people-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="addfriend"
        options={{
          title: 'Freund hinzufügen',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-add-sharp' : 'person-add-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
