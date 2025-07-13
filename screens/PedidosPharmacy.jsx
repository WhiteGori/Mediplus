import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  View,
  Modal,
} from 'react-native';

import * as Res from '../resources';
import { GeneralPurposeButton } from '../components';




export const PedidosPharmacy = ({navigation}) => {
    function orderStatus(order){
        if(order.status=="Aceptado"){
            return(
                <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:16,color:order.color}]}>
                    Pedido Aceptado</Text>
            );
        }
        else{
            return(
                <View style={{flexDirection:'row'}}>
                    <GeneralPurposeButton text="Aceptar" containerStyle={{margin:7}} color="green"/>
                    <GeneralPurposeButton text="Rechazar" containerStyle={{margin:7}} color="darkred"/>
                </View>
            );
        }
    }
    return(
        <SafeAreaView style={pedidosUserStyles.background}>
            <Text style={[Res.CommonStyles.texts.title,{marginBottom:28}]}>Pedidos</Text>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={PedidosData}
            renderItem={({item})=> (
                <View style={{borderTopWidth:3,borderColor:"grey",height:200}}>
                    <Text style={[Res.CommonStyles.texts.subtitle,{backgroundColor:Res.COMPONENT_COLOR.PRIMARY,width:"100%",color:"white"}]}>
                        Pedido nro {item.id}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:20}]}>
                        Cliente: {item.pharmacy}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:20}]}>
                        Medicina solicitada: {item.medicine}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:20}]}>
                        Cantidad solicitada: {item.quantity}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:16}]}>
                        Codigo de retiro: {item.code}</Text>
                    {orderStatus(item)}
                </View>
            )}
            
            />
    

        </SafeAreaView>

    )

}

const PedidosData= [
    {
        id:1,
        customer:"Juan Ignacio Causse",
        medicine: "Ibuprofeno 600mg",
        code:87219346,
        quantity:12,
        status:"Aceptado",
        color:"green"
    },
    {
        id:2,
        pharmacy:"Juan Manuel Blanco",
        medicine: "Levotiroxina 75mg",
        quantity:30,
        code:28374198,
        status:"Pendiente",
        color:"orange"
    },
    {
        id:3,
        pharmacy:"Fernanda Gonzales",
        medicine: 'Isotretinoína 20mg',
        quantity:30,
        code:28374198,
        status:"Pendiente",
        color:"orange"
    }
]


const pedidosUserStyles = StyleSheet.create({
    background: {
        backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
        flex: 1,
      },
});