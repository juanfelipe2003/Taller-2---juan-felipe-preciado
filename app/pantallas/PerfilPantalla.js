import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import usuarios from "../assets/usuarios.json";

export default function PerfilPantalla() {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [resultados, setResultados] = useState(usuarios);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    setResultados(
      usuarios.filter(item =>
        item.nombre.toLowerCase().includes(textoBuscar.toLowerCase())
      )
    );
  }, [textoBuscar]);

  return (
    <View style={estilos.contenedor}>
      <TextInput
        style={estilos.input}
        placeholder="Buscar usuario..."
        value={textoBuscar}
        onChangeText={setTextoBuscar}
      />

      <FlatList
        data={resultados}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setUsuarioSeleccionado(item)}>
            <Text style={estilos.item}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />

      {usuarioSeleccionado && (
        <View style={estilos.detalle}>
          <Text style={estilos.nombre}>{usuarioSeleccionado.nombre}</Text>
          <Text>Email: {usuarioSeleccionado.email}</Text>
          <Text>Teléfono: {usuarioSeleccionado.telefono}</Text>
          <Text>Dirección: {usuarioSeleccionado.direccion}</Text>
          <Text>Rol: {usuarioSeleccionado.rol}</Text>
        </View>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, padding: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  detalle: { marginTop: 20, padding: 10, backgroundColor: "#f2f2f2" },
  nombre: { fontSize: 18, fontWeight: "bold" }
});