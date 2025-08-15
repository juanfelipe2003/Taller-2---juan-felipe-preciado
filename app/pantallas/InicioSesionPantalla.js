import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import usuarios from "../assets/usuarios.json";

export default function InicioSesionPantalla() {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  const manejarInicioSesion = () => {
    const usuarioEncontrado = usuarios.find(u => u.email === correo);

    if (!usuarioEncontrado) {
      Alert.alert("Error", "El usuario no existe.");
      return;
    }

    if (usuarioEncontrado.clave !== clave) {
      Alert.alert("Error", "Contraseña incorrecta.");
      return;
    }

    Alert.alert("Bienvenido", `Hola ${usuarioEncontrado.nombre}`);
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Inicio de Sesión</Text>

      <Text>Correo electrónico:</Text>
      <TextInput
        style={estilos.input}
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />

      <Text>Contraseña:</Text>
      <TextInput
        style={estilos.input}
        value={clave}
        onChangeText={setClave}
        secureTextEntry
      />

      <Button title="Iniciar sesión" onPress={manejarInicioSesion} />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, padding: 20, justifyContent: "center" },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 15 }
});