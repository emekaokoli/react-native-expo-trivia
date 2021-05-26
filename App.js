import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { AppNavigator } from './components/AppNavigator';
import configureStore from './components/redux/configureStore';
import { LoadingScreen } from './components/Screens/LoadingScreen';

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar style='auto' />
          <AppNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
