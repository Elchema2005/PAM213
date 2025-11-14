import { Text, StyleSheet, View, Button, ScrollView as RNScrollView, FlatList, Modal, ActivityIndicator,} from 'react-native';
import React, { useState } from 'react';
import Contador from './Contador';
import Botones from './Botones';
import Backgroung from './Backgroung';
import Repaso from './Repaso'; 
import TextInputComponent from './TextInput'; 
import CustomScrollView from './CustomScrollView';
import Indicator from './Indicator';
import FlatListScreen from './FlatListScreen';
import FlatListScreen2 from './FlatListScreen2';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';



export default function Menu() {
  const [screen, setScreen] = useState('menu');

  const renderScreen = () => {
    const screens = {
      contador: <Contador />,
      botones: <Botones />,
      texto: <TextInputComponent />,
      fondo: <Backgroung />,
      desplaza: <CustomScrollView />,
      Indicador: <Indicator />,
      lista: <FlatListScreen />,
      lista2: <FlatListScreen2 />,
      modales: <Modal />,
      repaso: <Repaso />,
      botones2: <Botones />,
      modales: <ModalScreen />,
      BottomSheetScreen: <BottomSheetScreen/>,

      
      menu: (
        <View style={styles.container}>
          <Text style={styles.texto}>Menu de prácticas</Text>
          <View style={styles.botonesContainer}>
            <Button color='green' title='Pract: Contador' onPress={() => setScreen('contador')} />
            <Button color='black' title='Pract: Botones' onPress={() => setScreen('botones')} />
            <Button color='purple' title='Pract: Text Input' onPress={() => setScreen('texto')} />
            <Button color='grey' title='Pract: Background Image' onPress={() => setScreen('fondo')} />
            <Button color='blue' title='Pract: ScrollView' onPress={() => setScreen('desplaza')} />
            <Button color='orange' title='Pract: Activity Indicator' onPress={() => setScreen('Indicador')} />
            <Button color='brown' title='Pract: FlatList' onPress={() => setScreen('lista')} />
            <Button color='brown' title='Pract: FlatList 2' onPress={() => setScreen('lista2')} />
            <Button color='red' title='Pract: ModalScreen' onPress={() => setScreen('modales')} />
            <Button color='purple' title='Pract: Repaso' onPress={() => setScreen('repaso')} />
            <Button color='purple' title='Pract: BottomSheetScreen' onPress={() => setScreen('BottomSheetScreen')} />


              
          </View>
        </View>
      ),
    };

    return screens[screen] || <Text style={styles.texto}>Pantalla no encontrada</Text>;
  };

  return renderScreen();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: "#ffffffff",
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  botonesContainer: {
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
