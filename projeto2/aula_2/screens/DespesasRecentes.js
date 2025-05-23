import {Text} from 'react-native'
import DespesaSaida from '../components/despesa/DespesaSaida';

function DespesasRecente(){
    function filtrarUltimos7Dias(despesas){
        const hoje = new Date();
        const seteDiasAtras = new Date();
        seteDiasAtras.setDate(hoje.getDate() - 7);

        return despesas.filter(despesa => {
            return despesa.data >= seteDiasAtras && despesa.data <= hoje;
        });
    }
    const DUMMY_DESPESAS = {
    
        id: '1',
        descricao: 'conta de luz',
        valor: 100.99,
        data: new Date(2025, 2, 11)
    }
    
    return(
        <DespesaSaida despesas = {filtrarUltimos7Dias(DUMMY_DESPESAS)} periodo={'Ultimo sete dias'} />
    )
}

export default DespesasRecente