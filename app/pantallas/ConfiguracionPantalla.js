import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ConfiguracionPantalla() {
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <View style={[estilos.contenedor, { backgroundColor: modoOscuro ? "#333" : "#fff" }]}>
      <Text style={{ color: modoOscuro ? "#fff" : "#000", marginBottom: 20 }}>
        {modoOscuro ? "Modo Oscuro Activado" : "Modo Claro Activado"}
      </Text>
      <Button
        title="Cambiar Tema"
        onPress={() => setModoOscuro(!modoOscuro)}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: "center", alignItems: "center" }
});