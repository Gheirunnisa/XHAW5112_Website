import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ThankYouScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎉 Thank you for submitting!</Text>
      <Text style={styles.subText}>We appreciate your participation.</Text>
    </View>
  );
}

const COLORS = { primary: '#FFD500', text: '#000' };

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  subText: { color: COLORS.text },
});
