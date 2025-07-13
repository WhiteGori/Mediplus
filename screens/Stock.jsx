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
import { AddMedicineButton, GeneralPurposeButton, StockModalExisting, StockModalNew } from '../components';




export const Stock = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPick,setModalPick]= useState("")

    function dismissModal() {
        setModalVisible(false);
    }

    function showModal(num){
        setModalPick(num)
        setModalVisible(!modalVisible)
    }

    function setModal(){
        if(modalPick==1){
            return(
                <StockModalExisting onPress={dismissModal}/>
            );
        }
        else{
            return(
                <StockModalNew onPress={dismissModal}/>
            );
        }
    }
    return(
        <SafeAreaView style={pedidosUserStyles.background}>
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                {setModal()}
            </Modal>
            <Text style={[Res.CommonStyles.texts.title,{marginBottom:28}]}>Stock</Text>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={PedidosData}
            renderItem={({item})=> (
                <View style={{borderTopWidth:3,borderColor:"grey",height:180}}>
                    <Text style={[Res.CommonStyles.texts.subtitle,{backgroundColor:Res.COMPONENT_COLOR.PRIMARY,width:"100%",color:"white"}]}>
                        {item.medicine}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:20}]}>
                        Id de producto: {item.id}</Text>
                    <Text style={[Res.CommonStyles.texts.subtitle,{alignSelf:'flex-start',fontSize:20}]}>
                        Existencias: {item.quantity}</Text>

                    <GeneralPurposeButton text="Agregar Stock" onPress={()=> showModal(1)} containerStyle={{alignSelf:"center", width:"75%",marginTop:15}}/>
                </View>
            )}
            ListFooterComponent={
                <View style={{borderTopWidth:3,borderColor:"grey",padding:10}}>
                    <AddMedicineButton onPress={()=> showModal(0)}/>
                </View>
            }
            />


        </SafeAreaView>

    )

}

const PedidosData= [
    {
        id:1,
        medicine: "Ibuprofeno 600mg",
        quantity:10000,
    },
    {
        id:2,
        medicine: "Levotiroxina 75mg",
        quantity:1000,

    },
    {
        id:3,
        medicine: 'Isotretinoína 20mg',
        quantity:6000,
    }
]


const pedidosUserStyles = StyleSheet.create({
    background: {
        backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
        flex: 1,
      },
});
