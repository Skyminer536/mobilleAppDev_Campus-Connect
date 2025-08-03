import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image } from 'expo-image';

export default function TabLayout() {
  return (
  <Tabs
  screenOptions ={{
    tabBarActiveTintColor: "#ffd33d",
    tabBarInactiveTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: '#2AB4AE',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
    backgroundColor: '#2AB4AE',
    color: '#FFFFFF',

  },

  }} style={{
    backgroundColor: '#2AB4AE',
  }}>
    <Tabs.Screen name="index" options={{ title: 'Dashboard', tabBarIcon: ({color, focused}) => (
      <FontAwesome6 name='user-large' color={color} size={24}/>
    ), }}/>

    <Tabs.Screen name="events" options={{ title: 'Events', tabBarIcon: ({color, focused}) => (
      <FontAwesome6 name="calendar" size={24} color={color} />
    ), }}/>

    <Tabs.Screen name="rsvp" options={{ title: 'RSVP', tabBarIcon: ({color, focused}) => (
      <MaterialCommunityIcons name="calendar-star" size={24} color={color} />
    ), }}/>

    <Tabs.Screen name="store" options={{ title: 'Store', tabBarIcon: ({color, focused}) => (
      <FontAwesome6 name="bag-shopping" size={24} color={color} />
    ), }}/>
    <Tabs.Screen name="productViewer" options={{ title: 'Store', href:null, tabBarIcon: ({color, focused}) => (
      <FontAwesome6 name="bag-shopping" size={24} color={color} />
    ), }}/>
  </Tabs>);
}
