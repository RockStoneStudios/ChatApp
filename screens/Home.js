import React, { useEffect} from 'react'
import {Text,View,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const catImageUrl = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d";
import colors  from '../colors'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo'


const Home = () => {

  const navigation = useNavigation();

   useEffect(()=>{
        navigation.setOptions({
          headerLeft : ()=> (
            <Icon name="search" size={22} color={"black"}  style={{marginRight : 8}}/>
          ),
          headerRight : () => (
            <Image
              source={{uri : catImageUrl}}
              style={{
                width: 40,
                height: 40,
                marginRight : 15
              }}
              />
          )
        })
   },[navigation])

  return (
    <View style={styles.container}>
      <TouchableOpacity
         onPress={()=> navigation.navigate('Chat')}
         style = {styles.chatButton}
      >
     
      <Entypo name='chat' size={41}  color="#ffe"/>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: "#fff",
      marginRight : 0
  },
  chatButton: {
      backgroundColor: "#f57c00",
      height: 61,
      width: 61,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#f57c00",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: .9,
      shadowRadius: 8,
      marginRight: 30,
      marginBottom: 50,
      elevation : 1
  }
});

export default Home