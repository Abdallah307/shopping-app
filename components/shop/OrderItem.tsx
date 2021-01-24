import React from 'react'
import {View , Text , StyleSheet , Button} from 'react-native'
import AppColors from '../../Colors/AppColors'
import CartItemCard from './CardItem'

const OrderItem = (props) => {
    return(
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.amount}>{props.amount.toFixed(2)}$</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <View style={styles.detailsButtonView}>
                <Button color={AppColors.primary} title='Show Details'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    orderItem:{
        padding:15,
        backgroundColor:'white',
       
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:10,
        shadowOpacity:0.26,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:2,
    },
    summary:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
    },
    amount:{
        fontFamily:'open-sans-bold',
        fontSize:16,
        color:AppColors.primary,
    },
    date:{
        fontSize:16,
        fontFamily:'open-sans-bold',
        color:'#888',

    },
    detailsButtonView:{
        alignItems:'center',
        marginTop:10
    }
})

export default OrderItem;