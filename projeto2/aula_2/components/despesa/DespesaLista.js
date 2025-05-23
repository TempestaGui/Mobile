import{Text, View, FlatLIst} from 'react-native';
import DespesaItem from './DespesaItem';

function renderDespesaItem(itemData){
    return(
        <view>
            <Text>{itemData.item.descricao}</Text>
            <Text>{itemData.item.valor}</Text>
        </view>
    )
}



function DespesaLista(despesas){
    return(
        <FlatLIst data ={despesas} renderItem = {DespesaItem}
        keyExtractor = {(item) => item.id}
        >   
        </FlatLIst>
    )
}

export default DespesaLista;