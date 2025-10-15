import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Create Account</Text>
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
  container: { flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.text, marginBottom: 20 },
  input: {
    backgroundColor: COLORS.background,
    width: '100%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: { backgroundColor: COLORS.text, padding: 12, borderRadius: 8, width: '100%' },
  buttonText: { color: COLORS.primary, textAlign: 'center', fontWeight: 'bold' },
});
