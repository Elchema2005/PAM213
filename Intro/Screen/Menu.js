import {Text,StyleSheet,View,Button} from 'react-native';
import React,{useState} from 'react';
import Contador from './Contador';
import Botones from './Botones';
import Backgroung from './Backgroung';
import FlatList  from './FlatList';
import Indicator from './Indicator';
import ScrollView from './ScrollView';
import TextInput from './TextInput';
//zona 2 main: Zona de componentes

export default function Menu() {


    const [noscreen,setScreen]=useState('menu');

    switch (screen){
        case 'contador':
            return<Contador/>
            case 'botones':
            return<Botones/>
            case 'background':
            return<Backgroung/>
            case 'flatlist':
            return<FlatList/>
            case 'indicator':
            return<Indicator/>
            case 'scrollview':
            return<ScrollView/>
            case 'textinput':
            return<TextInput/>
            case 'menu':
            default:
                return(
        <View>
            <Text>Menu de preacticas</Text>
            <Button title='Pract:Contador' onPress={()=>setScreen('contador')}/>
                <Button title='Pract:Buttons' onPress={()=>setScreen('botones')}/>
                <Button title='Pract:Backgroung' onPress={()=>setScreen('background')}/>
                <Button title='Pract:FlatList' onPress={()=>setScreen('flatlist')}/>
                <Button title='Pract:Indicator' onPress={()=>setScreen('indicator')}/>
                <Button title='Pract:ScrollView' onPress={()=>setScreen('scrollview')}/>
                <Button title='Pract:Indicator' onPress={()=>setScreen('indicator')}/>
                <Button title='Pract:Sheet' onPress={()=>setScreen('sheet')}/>
            </View>
    )

    }
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
