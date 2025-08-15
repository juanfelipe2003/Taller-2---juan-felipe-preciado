import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';

const autor = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/autor.png')} style={styles.avatar} />
      <Text style={styles.name}>Juan Felipe Preciado Lara</Text>
      <Text style={styles.info}>Estudiante de la Universidad Tecnológica del Chocó</Text>
      <Text style={styles.info}>Quibdo-Choco</Text>
      <Text style={styles.info}>Desarrollo de Aplicaciones Móviles</Text>
      <Text style={styles.info}>7° semestre</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 50 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 16, textAlign: 'center' },
});

export default autor;