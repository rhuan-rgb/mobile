import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, Alert, StyleSheet, View} from 'react-native';
import api from '../axios/axios'

export default function Login(){
    const [user, setUser] = useState({
        email:'',
        password:''
    })

    async function handleLogin() {
        await api.postLogin(user).then(
            (response)=>{
                console.log(response.data.messages)
                Alert.alert(response.data.message)
            }, (error)=>{
                console.log(error)
            }
        )
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Faça o login </Text>
            <TextInput
            placeholder='Email'
            value={user.email}
            style={styles.input}
            onChangeText={(value)=>{setUser({...user, email:value })}}/>
        
            <TextInput
            placeholder='Senha'
            value={user.password}
            style={styles.input}
            onChangeText={(value)=>{setUser({...user, password:value })}}/>

            <TouchableOpacity onPress={handleLogin}style={styles.button}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
    fontSize:28,
    fontWeight:'bold'
    },
    input:{
        width:"100%",
        height:40,
        borderBottomWidth:1,
        marginBottom:20,
        paddingHorizon:10
    },
    button:{
        backgroundColor:'green',
        padding:10,
        borderRadius:5
    }
})