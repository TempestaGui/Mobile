import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DespesasRecente from './screens/DespesasRecentes';
import TotalDespesa from './screens/TodasDespesas';
import { NavigationContainer } from '@react-navigation/native';
import GerenciarDespesa from './screens/GerenciarDespesas';


export default function App() {

 const Tab = createBottomTabNavigator();

  function ButtonTabScreen(){
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Despesas recentes" component={DespesasRecente} />
      <Tab.Screen name = "Todas Despesas" component={TotalDespesa} />
    </Tab.Navigator>
  );
  } 

 const stack = createNativeStackNavigator();
 return(
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name = "Despesas" component={ButtonTabScreen} 
      options={{headerShown: false}}/>
      <stack.Screen name = "GerenciarDespesas" component={GerenciarDespesa} />
    </stack.Navigator>
  </NavigationContainer>
 )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
