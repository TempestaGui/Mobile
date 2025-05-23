import{Text} from 'react-native';

function getDateFormatada(data){
return data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear();
}

function DespesaItem(){
    return(
        <Pressable>
            <View style = {styles.itemContainer}>
                <View style = {styles.itemText}>
                    <Text>{getDateFormatada}(item.data)</Text>
                </View>
                <View style = {styles.itemText}>
                    <Text>{item.descricao}</Text>
                </View>
                <View style={styles.itemText}>
                    <Text>R$ {item.valor}</Text>
                </View>
            </View>
        </Pressable>
    )
}

 const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
    },
    itemText: {
        flex: 1,
        padding: 2,
        marginVertical: 2,
        marginHorizontal: 2,
        alingContent: 'left',
    }

 })
 
 export default DespesaItem;