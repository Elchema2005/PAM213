import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import Contador from './Contador';
import Botones from './Botones';
/* import Background from './Background'; // Corregido el nombre de la importación
import FlatList from './FlatList';
import Indicator from './Indicator';
import ScrollView from './ScrollView';
import Modal from './Modal'; */
export default function Menu() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <Contador />;
    case 'botones':
      return <Botones />;
    case 'texto':
      return <TextInput />; // Asumiendo que tienes un componente TextInput
    case 'fondo':
      return <Background />; // Corregido el componente a renderizar
    case 'desplaza':
      return <ScrollView />; // Corregido el componente a renderizar
    case 'indicadores':
      return <Indicator />; // Corregido el componente a renderizar
    case 'lista':
      return <FlatList />; // Corregido el componente a renderizar
    case 'modales':
      return <Modal />; // Asumiendo que tienes un componente Modal
    case 'botones2':
      return <Botones />; // Asumiendo que es el mismo componente o uno diferente
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.texto}>Menu de prácticas</Text>
          <View style={styles.botonesContainer}>
            <Button color='green' title='Pract: Contador' onPress={() => setScreen('contador')} />
            <Button color='black' title='Pract: Botones' onPress={() => setScreen('botones')} />
            <Button color='purple' title='Pract: Text Input' onPress={() => setScreen('texto')} />
            <Button color='grey' title='Pract: Background Image' onPress={() => setScreen('fondo')} />
            <Button color='blue' title='Pract: ScrollView' onPress={() => setScreen('desplaza')} />
            <Button color='orange' title='Pract: Activity Indicator' onPress={() => setScreen('indicadores')} />
            <Button color='brown' title='Pract: FlatList' onPress={() => setScreen('lista')} />
            <Button color='red' title='Pract: Modal' onPress={() => setScreen('modales')} />
            <Button color='purple' title='Pract: Bottom Sheet' onPress={() => setScreen('botones2')} />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#6fc4f5ff', // Color de fondo
    alignItems: 'center', // Alinea en eje x
    justifyContent: 'center', // Alinea en eje y
  },
  texto: {
    color: "#661d02ff",
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  botonesContainer: {
    marginTop: 15, // Margen hacia arriba
    flexDirection: 'column', // Cambiado a 'column' para una mejor alineación
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10, // Separación entre botones
  },
});
