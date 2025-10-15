import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Empowering the Nation</Text>
      <Text style={styles.text}>Explore our skill-building courses and resources.</Text>
    </View>
  );
}

const COLORS = { primary: '#FFD500', text: '#000', background: '#FFF' };

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  text: { color: COLORS.text, fontSize: 16, textAlign: 'center' },
});
