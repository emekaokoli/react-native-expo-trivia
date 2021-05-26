import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import IntroScreen from './Screens/IntroScreen';
import QuizScreen from './Screens/QuizScreen';
import Restart from './Screens/Restart';

const HeaderOptions = {
  headerStyle: {
    backgroundColor: 'skyblue',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    color: '#fff',
  },
};

export const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={HeaderOptions}>
        <Stack.Screen name='Home' component={IntroScreen} />
        {(props) => <Restart {...props} />}
        <Stack.Screen name='Quiz' component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
