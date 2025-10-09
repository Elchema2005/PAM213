//zona 1 import: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';

//zona 2 main: Zona de componentes
export default function App() {

  const [contador,setContador]=useState(0);

  return (
    <View style={styles.container}>
      <Text>Contador: {contador} </Text>      {/*shift + alt + A */}
      <Button title="Agregar" onPress={()=>setContador(contador + 1)}/>

        <Button title="Quitar" onPress={()=>setContador(contador - 1)}/>
          
          <Button title="Reiniciar" onPress={()=>setContador(contador * 0)}/>

    <StatusBar style="auto" />
    </View>
  );
}

//Zona 3: Zona de los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});