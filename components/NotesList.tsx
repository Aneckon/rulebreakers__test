import React from 'react';
import {useQuery, useRealm} from '@realm/react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Text, StyleSheet, Pressable} from 'react-native';

import {Notes} from '../schema';

export const NotesList = ({navigation}: any) => {
  const notes = useQuery(Notes);
  const realm = useRealm();

  const handleDeleteNotes = (data: any) => {
    realm.write(() => {
      realm.delete(data.item);
    });
  };

  return (
    <SwipeListView
      data={notes}
      renderItem={data => (
        <Pressable
          style={styles.item}
          onPress={() =>
            navigation.push('EditNotes', {
              name: data.item.name,
              id: data.item._id,
            })
          }>
          <Text>{data.item.name}</Text>
        </Pressable>
      )}
      renderHiddenItem={data => (
        <Pressable
          style={styles.delete}
          onPress={() => handleDeleteNotes(data)}>
          <Text style={styles.text}>Delete</Text>
        </Pressable>
      )}
      rightOpenValue={-80}
      closeOnRowPress={true}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    fontSize: 18,
    backgroundColor: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  delete: {
    width: 80,
    marginTop: 10,
    marginLeft: 'auto',
    paddingTop: 12,
    padding: 16,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
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
