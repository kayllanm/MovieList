/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MovieListContainer from './src/Movies/screens/MovieListView';
import MovieDetailsContainer from './src/Movies/screens/MovieDetailsView';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Movies"
          component={MovieListContainer}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Details" component={MovieDetailsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
