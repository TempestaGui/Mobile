import {Text} from 'react-native'
import DespesaSaida from '../components/despesa/DespesaSaida'

function TotalDespesa(){
    const DUMMY_DESPESAS = {
    
        id: '1',
        descricao: 'conta de luz',
        valor: 100.99,
        data: new Date(2025, 2, 11)
    }

    
    return(
        <DespesaSaida despesas={DUMMY_DESPESAS} periodo={'Total'}></DespesaSaida>
    )
}

export default TotalDespesa