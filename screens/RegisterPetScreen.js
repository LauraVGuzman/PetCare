import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/RegisterPetStyles';

const RegisterPetScreen = () => {
  // Independent states for each form field
  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  // State to manage the enable/disable status of the submit button
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect to validate the form in real-time whenever a field changes
  useEffect(() => {
    if (petName && species && breed && age && weight) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [petName, species, breed, age, weight]);

  // Function to handle the registration and show the summary Alert
  const handleRegister = () => {
    Alert.alert(
      '¡Mascota Registrada!',
      `Resumen:\n\nNombre: ${petName}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age}\nPeso: ${weight}`,
      [{ text: 'OK', onPress: handleClear }] // Automatically clear form after pressing OK
    );
  };

  // Function to reset all fields to their initial empty value
  const handleClear = () => {
    setPetName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Registrar Nueva Mascota</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput
              style={styles.input}
              value={petName}
              onChangeText={setPetName}
              placeholder="Ej. Max"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Especie:</Text>
            <TextInput
              style={styles.input}
              value={species}
              onChangeText={setSpecies}
              placeholder="Ej. Perro, Gato"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Raza:</Text>
            <TextInput
              style={styles.input}
              value={breed}
              onChangeText={setBreed}
              placeholder="Ej. Labrador"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Edad:</Text>
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={setAge}
              placeholder="Ej. 2 años"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Peso:</Text>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              placeholder="Ej. 15 kg"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.registerButton, !isFormValid && styles.registerButtonDisabled]}
              onPress={handleRegister}
              disabled={!isFormValid}
            >
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.clearButton}
              onPress={handleClear}
            >
              <Text style={styles.buttonText}>Limpiar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPetScreen;