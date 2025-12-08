import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { handleRegister } from '../controllers/UserController';

export default function PantallaRegistro({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('Alumno');

  const registrar = () => {
    handleRegister(nombre, email, password, rol, (success) => {
      if (success) {
        alert("Usuario registrado");
        navigation.navigate("Login");
      } else {
        alert("Error al registrar");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>

      <TextInput style={styles.input} placeholder="Nombre" onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />

      <Text style={styles.subtitle}>Selecciona tu rol:</Text>

      <TouchableOpacity style={styles.rol} onPress={() => setRol("Alumno")}>
        <Text>Alumno</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rol} onPress={() => setRol("Tutor")}>
        <Text>Tutor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={registrar}>
        <Text style={styles.btnText}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 28, textAlign: "center", marginBottom: 25 },
  subtitle: { marginTop: 10, marginBottom: 10, fontSize: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  rol: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  btn: { backgroundColor: "#000", padding: 15, borderRadius: 12, marginTop: 20 },
  btnText: { textAlign: "center", color: "#fff", fontSize: 18 },
});
