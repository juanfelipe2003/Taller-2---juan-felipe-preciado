import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuPantalla from "../pantallas/MenuPantalla";
import AutorPantalla from "../pantallas/AutorPantalla";
import InicioSesionPantalla from "../pantallas/InicioSesionPantalla";
import PrincipalPantalla from "../pantallas/PrincipalPantalla";
import ListaElementosPantalla from "../pantallas/ListaElementosPantalla";
import DetalleElementoPantalla from "../pantallas/DetalleElementoPantalla";
import RegistroPantalla from "../pantallas/RegistroPantalla";
import ConfiguracionPantalla from "../pantallas/ConfiguracionPantalla";
import PerfilPantalla from "../pantallas/PerfilPantalla";
import ServiciosPantalla from "../pantallas/ServiciosPantalla";

const Stack = createNativeStackNavigator();

export default function NavegacionApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menú" component={MenuPantalla} />
        <Stack.Screen name="Autor" component={AutorPantalla} />
        <Stack.Screen name="Inicio de Sesión" component={InicioSesionPantalla} />
        <Stack.Screen name="Pantalla Principal" component={PrincipalPantalla} />
        <Stack.Screen name="Lista de Elementos" component={ListaElementosPantalla} />
        <Stack.Screen name="DetalleElemento" component={DetalleElementoPantalla} />
        <Stack.Screen name="Registro" component={RegistroPantalla} />
        <Stack.Screen name="Configuración" component={ConfiguracionPantalla} />
        <Stack.Screen name="Perfil de Usuario" component={PerfilPantalla} />
        <Stack.Screen name="Lista de Servicios" component={ServiciosPantalla} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}