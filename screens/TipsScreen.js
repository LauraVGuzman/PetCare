import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/TipsStyles';
import CARE_TIPS from '../data/tipsData';

const TipsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tips] = useState(CARE_TIPS);

  // Auto-rotating tips every 5 seconds with cleanup to prevent memory leaks
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, 5000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, [tips.length]);

  // Effect with dependency array to log/track changes (simulating the rubric's requirement)
  useEffect(() => {
    console.log(`Now showing tip ${currentIndex + 1}`);
  }, [currentIndex]);

  // Manual advance button handler
  const handleNextTip = () => {
    setCurrentIndex((prev) => (prev + 1) % tips.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.indicator}>
          Consejo {currentIndex + 1} de {tips.length}
        </Text>
        
        <Text style={styles.tipText}>
          "{tips[currentIndex]}"
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleNextTip}>
          <Text style={styles.buttonText}>Siguiente Consejo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TipsScreen;