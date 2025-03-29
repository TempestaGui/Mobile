import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { rotulo_btn_cadastro_meta, rotulo_input_meta, rotulo_lista_metas} from './menssagem';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1, borderWidth: 1, borderColor: '#cccc', backgroundColor: '#c6d4e1'}}>
        <View style = {{width:'65%', backgroundColor: '#44749d',left: '1%'}}>
          <TextInput style = {styles.inputText} placeholder={rotulo_input_meta}/>
        </View>
        <View style = {{width: '30%', right: '1%'}}>
          <Button title={rotulo_btn_cadastro_meta}/>
        </View>
      </View>
      <View style = {styles.metaContainer}>
        <Text>{rotulo_lista_metas}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    padding: 30,
    flex: 1,
    flexDirection: 'column',
  },
  inputText: {
    borderColor: '#cccc',
    borderWidth: 1,
  },
  metaContainer: {
    flex: 7,
    borderWidth: 1,
    borderColor: '#cccc',
    backgroundColor: '#ebe7e0'
  },
});
