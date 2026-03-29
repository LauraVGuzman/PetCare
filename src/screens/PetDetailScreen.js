import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../src/styles/PetDetailStyles';

const PetDetailScreen = ({ route, navigation }) => {
  // Destructure the pet data received from PetListScreen via route params
  const { petData } = route.params; 

  // Additional local state required by the rubric (Favorite toggle)
  const [isFavorite, setIsFavorite] = useState(false);

  // Effect to dynamically update the header title based on the selected pet
  useEffect(() => {
    navigation.setOptions({ 
      title: `Detalles de ${petData.name}` 
    });
  }, [navigation, petData.name]);

  // Function to toggle the favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>{petData.emoji}</Text>
        <Text style={styles.title}>{petData.name}</Text>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Especie:</Text>
          <Text style={styles.value}>{petData.species}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Raza:</Text>
          <Text style={styles.value}>{petData.breed}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Edad:</Text>
          <Text style={styles.value}>{petData.age}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Peso:</Text>
          <Text style={styles.value}>{petData.weight}</Text>
        </View>

        <TouchableOpacity 
          style={[
            styles.favoriteButton, 
            isFavorite ? styles.favoriteButtonActive : styles.favoriteButtonInactive
          ]}
          onPress={toggleFavorite}
        >
          <Text style={styles.favoriteButtonText}>
            {isFavorite ? '❤️ Quitar de Favoritos' : '🤍 Marcar como Favorito'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PetDetailScreen;