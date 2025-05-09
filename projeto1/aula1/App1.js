import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { titulo } from './util';
import titulo_padrao from './util';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
      <Text style = {styles.Text}>{titulo_padrao}</Text>
      <Button title = "click aqui" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    margin: 20,
  }
});
