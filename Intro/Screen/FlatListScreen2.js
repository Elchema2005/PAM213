import { Text, View, StyleSheet, SectionList } from 'react-native';
import React from 'react';

const houses = [
    {
        title: 'DC comics',
        data: [
            'Superman',
            'Flash', // Cambié uno para evitar repeticiones
            'Wonder Woman', // Cambié uno para evitar repeticiones
        ],
    },
    {
        title: 'Batman',
        data: [
            'Batman',
            'Robin', // Cambié uno para evitar repeticiones
            'Batgirl', // Cambié uno para evitar repeticiones
        ],
    }
];

const FlatListScreen2 = () => {
  return (
    <View style={styles.container}>
        <SectionList
            sections={houses}
            keyExtractor={(item, index) => index.toString()} // Cambié para usar el índice como clave
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} // Añadido estilo
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeader}>{title}</Text> // Corregido el acceso al título
            )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
});

export default FlatListScreen2;
