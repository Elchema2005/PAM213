import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { handleRecoverPassword } from "../controllers/UserController";

export default function PantallaRecuperar({ navigation }) {
  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");

  const recuperar = () => {
    handleRecoverPassword(email, newPass, (success) => {
      if (!success) {
        alert("Correo no encontrado");
        return;
      }
      alert("Contraseña actualizada");
      navigation.navigate("Login");
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>

      <TextInput style={styles.input} placeholder="Correo registrado" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Nueva contraseña" secureTextEntry onChangeText={setNewPass} />

      <TouchableOpacity style={styles.btn} onPress={recuperar}>
        <Text style={styles.btnText}>Restablecer</Text>
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
});
