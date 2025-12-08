import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PantallaBienvenida({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.text}>Crear Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 35, marginBottom: 40 },
  btn: { backgroundColor: '#000', padding: 15, width: '70%', borderRadius: 12, marginTop: 10 },
  text: { color: '#fff', textAlign: 'center', fontSize: 18 },
});
