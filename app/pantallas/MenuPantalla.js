import React from "react";
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

const opcionesMenu = [
  { id: "1", titulo: "Autor", pantalla: "Autor" },
  { id: "2", titulo: "Inicio de Sesión", pantalla: "Inicio de Sesión" },
  { id: "3", titulo: "Pantalla Principal", pantalla: "Pantalla Principal" },
  { id: "4", titulo: "Lista de Elementos", pantalla: "Lista de Elementos" },
  { id: "5", titulo: "Registro", pantalla: "Registro" },
  { id: "6", titulo: "Configuración", pantalla: "Configuración" },
  { id: "7", titulo: "Perfil de Usuario", pantalla: "Perfil de Usuario" },
  { id: "8", titulo: "Lista de Servicios", pantalla: "Lista de Servicios" }
];

export default function MenuPantalla({ navigation }) {
  return (
    <View style={estilos.contenedor}>
      <FlatList
        data={opcionesMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={estilos.item}
            onPress={() => navigation.navigate(item.pantalla)}
          >
            <Text style={estilos.texto}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, padding: 20 },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginVertical: 5
  },
  texto: { fontSize: 18 }
});