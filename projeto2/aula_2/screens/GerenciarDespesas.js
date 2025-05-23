import { useState } from 'react';
import {Text, View, TextInput, StyleSheet, Pressable} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

function GerenciarDespesa(){
    const [data, setData] = useState(new Date());
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    const [showPicker, setShowPicker] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selected || data;
        setShowPicker(false);
        setData(currentDate);   
    } 
    return(
        <View style = {styles.container}>
            <View style = {styles.inputCOntainer}>
                <Text style = {styles.label}>descricao</Text>
                <TextInput style = {styles.input} maxLenght = {20} value = {descricao}></TextInput>
            </View>
            <View style = {styles.inputCOntainer}>
                <Text style = {styles.label}>Valor da despesa</Text>
                <TextInput style = {styles.input}
                keyboardType = {'decimal-pad'} value = {valor}></TextInput>
            </View>
            <View style = {styles.inputCOntainer}>
                <Text style = {styles.label}>Data de despesa</Text>
                <TextInput style = {styles.input} value = {data}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margi: 20,
    },
    inputCOntainer: {
        marginHorizontal: 4,
        marginVertical: 16,
    },
    label: {
        fontSize: 12, 
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
    },
});

export default GerenciarDespesa