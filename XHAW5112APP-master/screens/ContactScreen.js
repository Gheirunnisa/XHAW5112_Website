import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Your Message"
        multiline
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const COLORS = { primary: '#FFD500', text: '#000', background: '#FFF' };

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  input: {
    backgroundColor: COLORS.background,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: { backgroundColor: COLORS.text, padding: 12, borderRadius: 8 },
  buttonText: { color: COLORS.primary, textAlign: 'center', fontWeight: 'bold' },
});
