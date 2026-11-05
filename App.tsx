import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from './src/screens/InicioScreen';
import EstudiantesScreen from './src/screens/EstudiantesScreen';
import EstadisticasScreen from './src/screens/EstadisticasScreen';
import { Estudiante } from './src/types';

const Tab = createBottomTabNavigator();

const estudiantesIniciales: Estudiante[] = [
  { id: 1, nombre: 'Ana López', carrera: 'Ingeniería en Sistemas' },
  { id: 2, nombre: 'Carlos Méndez', carrera: 'Ingeniería en Sistemas' },
  { id: 3, nombre: 'María Pérez', carrera: 'Ingeniería Industrial' },
  { id: 4, nombre: 'José Ramírez', carrera: 'Administración' },
];

export default function App() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>(estudiantesIniciales);

  const agregarEstudiante = () => {
    const nuevoId = estudiantes.length + 1;
    const nuevo: Estudiante = {
      id: nuevoId,
      nombre: `Estudiante ${nuevoId}`,
      carrera: 'Ingeniería en Sistemas',
    };
    // Se crea un arreglo nuevo, sin modificar el original
    setEstudiantes([...estudiantes, nuevo]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Estudiantes">
          {() => (
            <EstudiantesScreen
              estudiantes={estudiantes}
              onAgregar={agregarEstudiante}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Estadísticas">
          {() => <EstadisticasScreen estudiantes={estudiantes} />}
        </Tab.Screen>
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
