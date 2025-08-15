import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import usuarios from "../assets/usuarios.json";

export default function RegistroPantalla() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [rol, setRol] = useState("");
  const [clave, setClave] = useState("");

  const manejarRegistro = () => {
    const existe = usuarios.find(u => u.email === email);

    if (existe) {
      Alert.alert("Error", "Ya existe un usuario con ese correo.");
      return;
    }

    Alert.alert("Éxito", `Usuario ${nombre} registrado correctamente.`);
    
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Registro de Usuario</Text>

      <Text>Nombre:</Text>
      <TextInput style={estilos.input} value={nombre} onChangeText={setNombre} />

      <Text>Email:</Text>
      <TextInput style={estilos.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text>Teléfono:</Text>
      <TextInput style={estilos.input} value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />

      <Text>Dirección:</Text>
      <TextInput style={estilos.input} value={direccion} onChangeText={setDireccion} />

      <Text>Rol:</Text>
      <TextInput style={estilos.input} value={rol} onChangeText={setRol} />

      <Text>Contraseña:</Text>
      <TextInput style={estilos.input} value={clave} onChangeText={setClave} secureTextEntry />

      <Button title="Registrarse" onPress={manejarRegistro} />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 15 }
});