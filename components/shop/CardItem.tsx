import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import AppColors from '../../Colors/AppColors'
const CartItemCard = (props) => {
    return(
        <View style={styles.cartItemView}>
            <Text style={styles.itemData}>
                <Text style={styles.quantityText}>{props.quantity}</Text> <Text ellipsizeMode='tail' style={styles.titleText}>{props.title}</Text>
            </Text>

            <View style={styles.itemData}>
                <Text style={styles.amountText}>{props.amount}$</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={()=> props.onRemove()}>
                    <Ionicons 
                    name='md-trash'
                    size={23}
                    color='red'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemView:{
        padding:15,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:10,
        shadowOpacity:0.26,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:2,
    },
    itemData:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    quantityText:{
        fontFamily:'open-sans-regular',
        color:'#888',
        fontSize:16
    },
    amountText:{
        fontFamily:'open-sans-regular',
        fontSize:16,
        color:AppColors.primary
    },
    deleteButton:{
        marginLeft:20,
    },
    titleText:{
        fontFamily:'open-sans-regular',
        fontSize:16,
        width:"40%",
        
    }
})

export default CartItemCard;