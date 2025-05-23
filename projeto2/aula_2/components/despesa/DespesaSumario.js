import{Text, View} from 'react-native';

function DespesaSuamario(despesas, periodo){
const somaDespesas = despesas.reduce((total, despesa) =>{
    return total + despesa.valor;
},0);

    return(
        <view>
            <Text>{periodo}</Text>
            <text>R$ {somaDespesas.toFixed(2)}</text>
        </view>
    )
}

export default DespesaSuamario;
