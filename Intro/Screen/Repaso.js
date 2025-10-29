import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground, Switch, StatusBar, Image } from 'react-native';

const FONDO = require('../assets/Recursos/1.jpeg');
const LOGO = require('../assets/Recursos/2.jpeg');

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptar, setAceptar] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const manejarRegistro = () => {
    if (nombre === '' || correo === '') {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (!correo.includes('@')) {
      Alert.alert('Error', 'El correo debe contener un @.');
      return;
    }

    if (!aceptar) {
      Alert.alert('Error', 'Debes aceptar los términos.');
      return;
    }

    Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  if (cargando) {
    return (
      <ImageBackground source={FONDO} style={styles.splash}>
        <StatusBar barStyle="light-content" />
        <View style={styles.splashOverlay}>
          <Image source={LOGO} style={styles.logo} />
          <Text style={styles.splashTexto}>Cargando...</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={FONDO} style={styles.fondo}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Registro de Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={correo}
          onChangeText={setCorreo}
        />

        <View style={styles.switchRow}>
          <Text>Aceptar términos</Text>
          <Switch value={aceptar} onValueChange={() => setAceptar(!aceptar)} />
        </View>

        <Button title="Registrarse" onPress={manejarRegistro} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedor: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  splashTexto: {
    color: '#fff',
    fontSize: 20,
  },
});
