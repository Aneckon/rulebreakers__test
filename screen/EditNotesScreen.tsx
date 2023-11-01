import React from 'react';
import {useRealm, useQuery, useObject} from '@realm/react';
import {TextInput, View, StyleSheet, Pressable, Text} from 'react-native';

import {Notes} from '../schema';

function EditNotesScreen({route, navigation}: any) {
  const realm = useRealm();
  const myNotes = useObject(Notes, route.params.id);

  const [value, setValue] = React.useState(route.params.name || '');
  const [valueError, setValueError] = React.useState(false);

  const handleEditNotes = () => {
    if (value.length && value.indexOf(' ')) {
      realm.write(() => {
        if (myNotes) {
          myNotes.name = value;
        }
      });
      navigation.goBack();
    } else {
      setValueError(true);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Notes name"
        placeholderTextColor={'#fff'}
      />
      {valueError && (
        <Text style={styles.inputError}>Incorrectly filled form</Text>
      )}
      <Pressable style={styles.btn} onPress={handleEditNotes}>
        <Text style={styles.text}>Edit Notes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'grey',
    color: '#fff',
    margin: 5,
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
  },
  inputError: {
    color: 'red',
    paddingLeft: 10,
  },
  btn: {
    marginTop: 5,
    backgroundColor: 'grey',
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
});

export default EditNotesScreen;
