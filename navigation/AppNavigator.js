import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

// Importing the actual screen components
import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';

// Temporary DummyScreen for tabs that are not yet implemented
const DummyScreen = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{route.name} Screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator to handle the internal flow: List -> Detail
const PetStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="PetList" 
        component={PetListScreen} 
        options={{ title: 'Mis Mascotas' }} 
      />
      <Stack.Screen 
        name="PetDetail" 
        component={PetDetailScreen} // Successfully connected to the real screen
        options={{ title: 'Detalle de la Mascota' }} 
      />
    </Stack.Navigator>
  );
};

// Main Tab Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Mascotas" component={PetStack} />
        <Tab.Screen name="Registrar" component={RegisterPetScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Consejos" component={DummyScreen} options={{ headerShown: true }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;