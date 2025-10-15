import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.text}>
        Empowering the Nation is dedicated to providing accessible short- and long-term courses to help individuals
        gain valuable skills and opportunities.
      </Text>
    </View>
  );
}

const COLORS = { primary: '#FFD500', text: '#000', background: '#FFF' };

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  text: { color: COLORS.text, fontSize: 16, lineHeight: 22 },
});
