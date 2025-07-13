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
import { GeneralPurposeButton, MedicineOrder } from '../components';




export const PedidosUser = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    function dismissModal() {
        setModalVisible(false);
      }
    return(
        <SafeAreaView style={pedidosUserStyles.background}>
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <MedicineOrder onPress={dismissModal}/>
            </Modal>
            <Text style={[Res.CommonStyles.texts.title,{marginBottom:28}]}>Pedidos</Text>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={PedidosData}
            renderItem={({item})=> (
                <View style={{borderTopWidth:3,borderColor:"grey",height:200}}>
                    <Text style={[Res.CommonStyles.texts.subtitle,{backgroundColor:Res.COMPONENT_COLOR.PRIMARY,width:"100%",color:"white"}]}>
                        Pedido nro {item.id}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:20, marginHorizontal:10}]}>
                        Farmacia: {item.pharmacy}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:20, marginHorizontal:10}]}>
                        Medicina solicitada: {item.medicine}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:20, marginHorizontal:10}]}>
                        Cantidad solicitada: {item.quantity}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:16, marginHorizontal:10}]}>
                        Codigo de retiro: {item.code}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:16,color:item.color, marginHorizontal:10}]}>
                        Estado del pedido: {item.status}</Text>
                </View>
            )}
            
            />
            <View style={{marginHorizontal:20,flex:1}}>
                <GeneralPurposeButton text="Realizar Pedido" onPress={()=> setModalVisible(!modalVisible)}/>
            </View>

        </SafeAreaView>

    )

}

const PedidosData= [
    {
        id:1,
        pharmacy:"Farmacia Azul",
        medicine: "Ibuprofeno 600mg",
        code:87219346,
        quantity:12,
        status:"Aceptado",
        color:"green"
    },
    {
        id:2,
        pharmacy:"Farmacity",
        medicine: "Levotiroxina 75mg",
        code:28374198,
        quantity:30,
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