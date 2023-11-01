import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

import {NotesList} from '../components/NotesList';

function NotesScreen({navigation}: any) {
  return (
    <View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('CreateNotes')}>
        <Text style={styles.text}>Create Notes</Text>
      </Pressable>
      <NotesList navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    backgroundColor: 'grey',
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
});

export default NotesScreen;
