import React, { useState } from 'react'
import { StyleSheet ,View,Text, Image,TextInput,TouchableOpacity, Alert, StatusBar } from 'react-native'
import {signInWithEmailAndPassword} from 'firebase/compat/auth';
import { auth } from '../config/firebase.js';
import backImage from '../assets/backImage.png';


const Login = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


     const onHandleLogin = () =>{ 
          if([email,password].includes('')){
              Alert.alert(
                  'Login Error'
              )
          }
          try {

              signInWithEmailAndPassword(auth,email,password)
          }catch(error){
              console.log(error);
          }
     }
     

  return (
   <View style={StyleSheet.container}>
       <Image source={backImage}  style={styles.backImage} />
       <View style={styles.whiteSheet}/>
            <View style={styles.form}> 
                <Text style={styles.title}>Login</Text>
                <TextInput 
                 style = {styles.input}
                 placeholder = "Enter Email"
                 autoCapitalize='none'
                 keyboardType='email-address'
                 textContentType='emailAddress'
                 autoFocus = {true}
                 value= {email}
                 onChangeText= {texto=> setEmail(texto)}
                 
                />
             
                <TextInput 
                 style = {styles.input}
                 placeholder = "Enter Password"
                 autoCapitalize='none'
                 autoCorrect ={false}
                secureTextEntry={true}
               textContentType = "password"
                 value= {password}
                 onChangeText= {texto=> setPassword(password)}
                 
                />

                <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                    <Text style={{fontWeight : 'bold', color : '#fff',fontSize : 18}}>LogIn</Text>
                </TouchableOpacity>
                <View style={{marginTop : 20, flexDirection : 'row', alignItems : 'center', alignSelf : 'center'}}>
                    <Text style={{color : 'gray',fontWeight:'600', fontSize :14}}>No tienes una cuenta ?{' '} </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("SignUp") }>
                        <Text style={{color : '#f57c00', fontWeight : '800',fontSize : 16}}>SingUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
   </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#fff'
    },
    title : {
      fontSize : 36,
      fontWeight : 'bold',
      color: 'orange',
      alignSelf : 'center',
      paddingBottom : 24
    },
    backImage : {
        width: "100%",
        height: 340,
        position: 'absolute',
        top: 0,
        resizeMode : 'cover'
    },
    whiteSheet : {
        width: '100%',
        height: '75%',
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
    },
     form : {
         marginVertical : 300
     },
     input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
        marginHorizontal : '5%'
      },
      button: {
        backgroundColor: '#f57c00',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal : '5%'
      },
})
export default Login;