import React from 'react';
import {useRealm} from '@realm/react';
import {TextInput, View, StyleSheet, Pressable, Text} from 'react-native';

function CreacteNotesScreen({navigation}: any) {
  const realm = useRealm();

  const [value, setValue] = React.useState('');
  const [valueError, setValueError] = React.useState(false);

  const handleCreateNotes = () => {
    if (value.length && value.indexOf(' ')) {
      realm.write(() => {
        realm.create('Notes', {
          _id: new Realm.BSON.ObjectId(),
          name: value,
        });
        setValue('');
        navigation.goBack();
      });
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
      <Pressable style={styles.btn} onPress={handleCreateNotes}>
        <Text style={styles.text}>Create Notes</Text>
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

export default CreacteNotesScreen;
