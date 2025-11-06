import React, { useState } from 'react';

import { ScrollView, View, Text, StyleSheet, Button, Image } from 'react-native';

const SPLASH_IMAGEN = require('../assets/Recursos/1.jpeg');
const MAIN_IMAGEN = require('../assets/Recursos/3.jpeg');
const LOGO_IMAGEN = require('../assets/Recursos/2.jpeg');

export default function Galeria() {
    const [items, setItems] = useState([
    { title: "Opción 1", image: SPLASH_IMAGEN },
    { title: "Opción 2", image: MAIN_IMAGEN },
    { title: "Opción 3", image: LOGO_IMAGEN },
    { title: "Opción 4", image: SPLASH_IMAGEN },
    { title: "Opción 5", image: MAIN_IMAGEN },
    { title: "Opción 6", image: LOGO_IMAGEN },
  ]);

 return (
    <View style={styles.container}>
      <Text style={styles.title}> Mi Galeria</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        scrollEnabled={true}
        keyboardDismissMode="on-drag"
      >
        {items.map((item, index) => (
          <View key={index} style={styles.box}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
      <Button title="Ir a la página de detalles" onPress={() => alert('Botón presionado')} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#EEF2FF',
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold',
    textAlign: 'center', 
    marginVertical: 15, 
    color: '#2C3E50',
  },
  scroll: { 
    flex: 1, 
    marginBottom: 15, 
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
  },
  content: { 
    paddingVertical: 15, 
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#82B6ED',
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: { 
    fontSize: 18, 
    color: '#1F2937',
    textAlign: 'center',
  },
    box: {
    backgroundColor: '#82B6ED',
    width: 150, 
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center', 
  },
  image: {
    width: 100,
    height: 100, 
    borderRadius: 10,
    marginBottom: 5,
  },
  text: { 
    fontSize: 18, 
    color: '#1F2937',
    textAlign: 'center',
  },
  
  space: {
    width: 10, 
    height: 10, 
  },
});
