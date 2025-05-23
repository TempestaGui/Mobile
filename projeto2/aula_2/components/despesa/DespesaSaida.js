import{View} from 'react-native';
import DespesaSuamario from './DespesaSumario';
import DespesaLista from './DespesaLista';

function DespesaSaida({despesas, periodo}){
    return(
        <View>
            <DespesaSuamario despesas = {despesas} periodo = {periodo}></DespesaSuamario>
            <DespesaLista despesas = {despesas}></DespesaLista>
        </View>
    )
}

export default DespesaSaida;