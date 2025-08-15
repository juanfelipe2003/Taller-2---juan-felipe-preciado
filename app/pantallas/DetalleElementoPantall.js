import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import productos from "../assets/productos.json";

export default function DetalleElementoPantalla({ route }) {
  const { id } = route.params;
  const elemento = productos.find(item => item.id === id);

  if (!elemento) {
    return (
      <View style={estilos.contenedor}>
        <Text>Elemento no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={estilos.contenedor}>
      <Image source={{ uri: elemento.imagen }} style={estilos.imagen} />
      <Text style={estilos.titulo}>{elemento.titulo}</Text>
      <Text>{elemento.descripcion}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, padding: 20 },
  imagen: { width: "100%", height: 200, marginBottom: 10 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});