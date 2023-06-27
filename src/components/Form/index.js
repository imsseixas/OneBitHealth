import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";


export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
const [Imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function ImcCalculator(){
    return setImc((weight/(height*height)).toFixed(2));
}

function validationImc(){
    if(height != null && weight != null){
        ImcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é:")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e a altura")
}


    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex.: 1.75" keyboardType="numeric"/>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex.: 75.10" keyboardType="numeric"/>
                <TouchableOpacity style={styles.ButtonCalculator} onPress={() => validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                <ResultImc messageResultImc={messageImc} ResultImc={Imc}/>
            </View>
        </View>
    )
}