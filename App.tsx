import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RealmProvider} from '@realm/react';

import NotesScreen from './screen/NotesScreen';
import CreateNotesScreen from './screen/CreateNotesScreen';
import EditNotesScreen from './screen/EditNotesScreen';

import {Notes} from './schema';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RealmProvider schema={[Notes]} schemaVersion={5}>
        <Stack.Navigator>
          <Stack.Screen name="Notes" component={NotesScreen} />
          <Stack.Screen name="CreateNotes" component={CreateNotesScreen} />
          <Stack.Screen name="EditNotes" component={EditNotesScreen} />
        </Stack.Navigator>
      </RealmProvider>
    </NavigationContainer>
  );
}

export default App;
