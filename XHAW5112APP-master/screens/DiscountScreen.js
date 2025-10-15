import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DiscountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discounts</Text>
      <Text style={styles.text}>Get up to 10% off selected courses.</Text>
      <Text style={styles.text}>Exclusive offers for registered learners.</Text>
    </View>
  );
}

const COLORS = { primary: '#FFD500', text: '#000', background: '#FFF' };

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  text: { color: COLORS.text, fontSize: 16, marginBottom: 5 },
});
