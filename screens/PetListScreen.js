import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/PetListStyles';

// Hardcoded initial data
const INITIAL_PETS = [
  { id: '1', name: 'Max', species: 'Perro', breed: 'Golden Retriever', age: '2 años', weight: '20 kg', emoji: '🐶' },
  { id: '2', name: 'Bella', species: 'Gato', breed: 'Siamés', age: '1 año', weight: '4 kg', emoji: '🐱' },
  { id: '3', name: 'Paco', species: 'Loro', breed: 'Cacatúa', age: '3 años', weight: '0.5 kg', emoji: '🦜' },
];

const PetListScreen = ({ navigation }) => {
  // Local state to manage the array of pets
  const [pets, setPets] = useState([]);

  // useEffect with an empty dependency array to simulate data loading on mount
  useEffect(() => {
    setPets(INITIAL_PETS);
  }, []);

  // Function to navigate and pass the entire selected pet object as a parameter
  const handlePressPet = (selectedPet) => {
    navigation.navigate('PetDetail', { petData: selectedPet });
  };

  const renderPetItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePressPet(item)}>
      <Text style={styles.emoji}>{item.emoji}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>Especie: {item.species}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PetListScreen;