import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const servicios = [
  { id: 1, nombre: "Servicio de entrega" },
  { id: 2, nombre: "Soporte técnico" },
  { id: 3, nombre: "Asesoría personalizada" }
];

export default function ServiciosPantalla() {
  return (
    <FlatList
      data={servicios}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={estilos.item}>
          <Text>{item.nombre}</Text>
        </View>
      )}
    />
  );
}

const estilos = StyleSheet.create({
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ccc" }
});