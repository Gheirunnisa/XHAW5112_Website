import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
<Image source={require('../assets/logo.png')} style={styles.logo} />


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Empowering the Nation</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainTabs')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Create Account</Text>
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
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 24, color: COLORS.text, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '100%',
    backgroundColor: COLORS.background,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.text,
    padding: 12,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: { color: COLORS.primary, textAlign: 'center', fontWeight: 'bold' },
  link: { marginTop: 15, color: COLORS.text },
});
