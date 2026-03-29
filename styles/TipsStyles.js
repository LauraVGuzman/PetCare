import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5', // Matching light purple background
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#673AB7', // Purple tinted shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
    minHeight: 250,
    justifyContent: 'space-between',
  },
  indicator: {
    fontSize: 14,
    color: '#7E57C2', // Medium purple
    fontWeight: 'bold',
    marginBottom: 15,
  },
  tipText: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
    lineHeight: 32,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#673AB7', // Main Purple
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default styles;