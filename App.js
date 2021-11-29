import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Tabs from './components/Tabs'
import Context, {NewsContext} from './API/contextapi';

function App() {
  return (
    <Context>
      <View style={styles.container}>
        <Tabs />
      </View>
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
