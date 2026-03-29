import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PetStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#673AB7' }, // Purple header
        headerTintColor: '#FFFFFF', // White text
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="PetList" component={PetListScreen} options={{ title: 'Mis Mascotas' }} />
      <Stack.Screen name="PetDetail" component={PetDetailScreen} options={{ title: 'Detalle de la Mascota' }} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#673AB7', // Active tab in deep purple
          tabBarInactiveTintColor: '#9E9E9E', // Inactive tab in gray
          tabBarStyle: { paddingBottom: 5, height: 60 },
          tabBarIcon: ({ focused }) => {
            let iconEmoji;
            // Assigning emojis as safe, native icons
            if (route.name === 'Mascotas') {
              iconEmoji = focused ? '🐾' : '🐈';
            } else if (route.name === 'Registrar') {
              iconEmoji = focused ? '📝' : '📄';
            } else if (route.name === 'Consejos') {
              iconEmoji = focused ? '💡' : '📘';
            }
            return <Text style={{ fontSize: 24 }}>{iconEmoji}</Text>;
          },
        })}
      >
        <Tab.Screen name="Mascotas" component={PetStack} />
        <Tab.Screen 
          name="Registrar" 
          component={RegisterPetScreen} 
          options={{ 
            headerShown: true,
            headerStyle: { backgroundColor: '#673AB7' },
            headerTintColor: '#FFFFFF',
          }} 
        />
        <Tab.Screen 
          name="Consejos" 
          component={TipsScreen} 
          options={{ 
            headerShown: true,
            headerStyle: { backgroundColor: '#673AB7' },
            headerTintColor: '#FFFFFF',
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;