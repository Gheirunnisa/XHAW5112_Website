import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LogoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sad to see you go 😔</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.buttonText}>Log In Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const COLORS = {
  primary: '#FFD500',
  text: '#000000',
  background: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: COLORS.text,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  button: {
    backgroundColor: COLORS.text,
    padding: 12,
    borderRadius: 8,
    width: '60%',
  },
  buttonText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
