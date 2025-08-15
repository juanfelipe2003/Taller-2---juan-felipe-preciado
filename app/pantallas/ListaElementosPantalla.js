import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import productos from "../assets/productos.json";

export default function ListaElementosPantalla() {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [resultados, setResultados] = useState(productos);
  const navegacion = useNavigation();

  useEffect(() => {
    setResultados(
      productos.filter(item =>
        item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
      )
    );
  }, [textoBuscar]);

  return (
    <View style={estilos.contenedor}>
      <TextInput
        style={estilos.input}
        placeholder="Buscar..."
        value={textoBuscar}
        onChangeText={setTextoBuscar}
      />

      <FlatList
        data={resultados}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navegacion.navigate("DetalleElemento", { id: item.id })}
          >
            <Text style={estilos.item}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, padding: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" }
});