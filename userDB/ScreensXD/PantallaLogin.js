import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { handleLogin } from '../controllers/UserController';

export default function PantallaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const iniciar = () => {
    handleLogin(email, password, (user) => {
      if (!user) {
        alert("Credenciales incorrectas");
        return;
      }

      if (user.rol === "Alumno") navigation.replace("TabsAlumno");
      else navigation.replace("TabsTutor");
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />

      <TouchableOpacity style={styles.btn} onPress={iniciar}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Recuperar")}>
        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 28, textAlign: "center", marginBottom: 30 },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  btn: { backgroundColor: "#000", padding: 12, borderRadius: 10, marginTop: 10 },
  btnText: { textAlign: "center", color: "#fff", fontSize: 18 },
  link: { color: "blue", textAlign: "center", marginTop: 15 },
});
