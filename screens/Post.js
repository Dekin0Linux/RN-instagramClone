import { View, Text , StyleSheet, SafeAreaView, Image,Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'

import { Profile,Story } from '../components/Story'

const {width,height} = Dimensions.get('window')

import HomeScreen from '../screens/HomeScreen'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'

const Post = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20,alignItems:'center'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>

            <TouchableOpacity onPress={()=>navigation.navigate(HomeScreen)}>
              <Feather name='x' size={30} />
            </TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:20}}>New Post</Text>
          </View>

          <TouchableOpacity onPress={()=>navigation.navigate(HomeScreen)}>
            <AntDesign name='arrowright' size={30}/>
          </TouchableOpacity>
          
        </View>

      <ScrollView>
      

        <View style={{width:width,height:400,backgroundColor:'gray'}}>
          <Image source={Profile.profileImage} style={{width:'100%',height:'100%'}}/>
        </View>

        <View style={{marginTop:20,flexDirection:'row'}}>
          <Text style={{fontSize:20}}>Gallery</Text>
          <View></View>
        </View>

        <View style={styles.imgCont}>
          {
              Story.map((item)=>(
                  <Image source={item.image} style={styles.postImg} key={item.id}/>
              ))
          }
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
  container:{
    flex: 1,
    marginTop:20
  },
  imgCont:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:30
},
postImg:{
    width:width/3,
    height: 130,

   },
})

export default Post