import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import productos from "../assets/productos.json";

export default function PrincipalPantalla() {
  const [datos, setDatos] = useState(productos);

  const alternarMostrarTodo = (id) => {
    setDatos(datos.map(item =>
      item.id === id ? { ...item, mostrarTodo: !item.mostrarTodo } : item
    ));
  };

  return (
    <FlatList
      data={datos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={estilos.item}>
          <Image source={{ uri: item.imagen }} style={estilos.imagen} />
          <Text style={estilos.titulo}>{item.titulo}</Text>
          <Text>
            {item.mostrarTodo
              ? item.descripcion
              : item.descripcion.substring(0, 30) + "..."}
          </Text>
          <TouchableOpacity onPress={() => alternarMostrarTodo(item.id)}>
            <Text style={estilos.botonTexto}>
              {item.mostrarTodo ? "Ver menos" : "Ver más"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const estilos = StyleSheet.create({
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  imagen: { width: "100%", height: 150, marginBottom: 10 },
  titulo: { fontSize: 18, fontWeight: "bold" },
  botonTexto: { color: "blue", marginTop: 5 }
});