import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function PaymentScreen({ navigation }) {
  const [course, setCourse] = useState('');
  const [discount, setDiscount] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Course Payment</Text>
      <TextInput style={styles.input} placeholder="Course Name" value={course} onChangeText={setCourse} />
      <TextInput style={styles.input} placeholder="Discount Code (if any)" value={discount} onChangeText={setDiscount} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThankYou')}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const COLORS = { primary: '#FFD500', text: '#000', background: '#FFF' };

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  input: { backgroundColor: COLORS.background, padding: 12, borderRadius: 8, marginBottom: 15 },
  button: { backgroundColor: COLORS.text, padding: 12, borderRadius: 8 },
  buttonText: { color: COLORS.primary, textAlign: 'center', fontWeight: 'bold' },
});
