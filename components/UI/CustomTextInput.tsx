import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";


const CustomTextInput = props => {
    return(
        <View style={styles.formControlView}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput value={props.value} onChangeText={props.onChangeText} style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontFamily:'open-sans-bold',
        marginVertical:8
    },
    input:{
        borderBottomWidth:2,
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:'#ccc'
    },
    formControlView:{
       width:'100%',
    },
})

export default CustomTextInput;