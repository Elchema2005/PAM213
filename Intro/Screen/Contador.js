//zona 1 import: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';

//zona 2 main: Zona de componentes
export default function App() {

const [contador,setContador]=useState(0);

return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Contador:</Text>
      <Text style={styles.Texto2}>{contador}</Text>

      <View style={styles.botonesContainer}>

    <Button color={"red"} title="Agregar" onPress={()=>setContador(contador + 1)}/>
        <Button color={"red"} title="Quitar" onPress={()=>setContador(contador - 1)}/>
          <Button color={"red"} title="Reiniciar" onPress={()=>setContador(contador * 0)}/>
            </View>
    <StatusBar style="auto" />
    </View>
);
}

//Zona 3: Zona de los estilos
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
},
  Texto:{
    color:"#ffee00ff",
    fontSize: 30,
    frontFamily:'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'Line-through',
},
  Texto2:{
    color:"#ffffffff",
    fontSize: 35,
    frontFamily:'Courier',
    fontWeight:'400',
    fontStyle:'normal',
    textDecorationLine:'underLine',
},
botonesContainer:{
  marginTop:15,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  gap:10,
}
});
