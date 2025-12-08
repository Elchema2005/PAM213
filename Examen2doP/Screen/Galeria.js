import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, ImageBackground, Alert } from 'react-native';

const IMG1 = require('../assets/Recursos/1.jpeg');
const IMG2 = require('../assets/Recursos/2.jpeg');
const IMG3 = require('../assets/Recursos/3.jpeg');

const DATA = [
  {
    title: 'Atardecer dorado',
    image: IMG1,
    brief: 'Cielo anaranjado sobre el horizonte.',
    details: 'Un atardecer vibrante que pinta el cielo de tonos cálidos y resalta las siluetas del paisaje.'
  },
  {
    title: 'Montañas serenas',
    image: IMG2,
    brief: 'Cordillera bajo nubes suaves.',
    details: 'Picos majestuosos envueltos por nubes algodonosas, transmitiendo calma y grandeza natural.'
  },
  {
    title: 'Bosque esmeralda',
    image: IMG3,
    brief: 'Sendero entre árboles frondosos.',
    details: 'Un recorrido entre árboles altos donde la luz se filtra creando un ambiente místico y fresco.'
  },
  {
    title: 'Orilla tranquila',
    image: IMG1,
    brief: 'Arena fina y olas suaves.',
    details: 'Playas silenciosas que invitan a caminar descalzo y escuchar el vaivén relajante del mar.'
  },
  {
    title: 'Ciudad nocturna',
    image: IMG2,
    brief: 'Luces y reflejos urbanos.',
    details: 'Rascacielos iluminados, reflejos en el asfalto y una energía vibrante que nunca descansa.'
  },
  {
    title: 'Valle floral',
    image: IMG3,
    brief: 'Pradera cubierta de flores.',
    details: 'Colores vivos que tapizan el valle, abejas zumbando y brisa que perfuma el ambiente.'
  }
];

export default function Galeria() {
  const handleDetails = (item) => {
    Alert.alert(
      item.title,
      item.details,
      [
        { text: 'Cerrar', style: 'cancel' }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Galería</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {DATA.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <ImageBackground source={item.image} style={styles.image} imageStyle={styles.imageRadius}>
              <View style={styles.overlay}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.brief}</Text>
                <View style={styles.buttonContainer}>
                  <Button title="Ver detalles" onPress={() => handleDetails(item)} />
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 12,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    height: 200,
    width: '100%',
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
    color: '#E5E7EB',
    marginBottom: 8,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
  },
});
