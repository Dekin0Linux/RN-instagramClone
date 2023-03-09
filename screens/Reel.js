import { View, Text, SafeAreaView, StyleSheet, ImageBackground, FlatList,Dimensions, TouchableOpacity ,Image} from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get('window')

import { Profile,Reels } from '../components/Story'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Reel = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Reels}
        snapToInterval={height-70}
        decelerationRate={'fast'}
        renderItem={({item})=>(
          <ImageBackground source={item.feed} style={styles.reel}>
            <View style={styles.top}>
              <Text style={{fontSize:25,color:'white',fontWeight:600}}>Reels</Text>
              <AntDesign name='camerao' size={28} color='white'/>
            </View>

            <View style={styles.views}>
              <View style={styles.view1}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image source={item.profile} style={{width:40,height:40,borderRadius:20}}/>
                  <Text style={{marginHorizontal:20,color:'white',fontWeight:700}}>{item.name}</Text>
                  <TouchableOpacity style={{paddingHorizontal:15,paddingVertical:5,borderColor:'white',borderWidth:1,borderRadius:7}}>
                    <Text style={{color:'white',fontWeight:500}}>Follow</Text>
                  </TouchableOpacity>
                </View>
                <Text style={{color:'white',fontWeight:700}}>{item.caption}</Text>
                <Text style={{color:'white',fontWeight:400,marginVertical:8}}>Liked by</Text>
                <Text style={{color:'white',fontWeight:700}}>Music / Sound</Text>
              </View>

              <View style={styles.view2}>
                <View>
                  <AntDesign name='hearto' size={27} color='white'/>
                  <Text style={{color:'white',fontWeight:600}}>1.1k</Text>
                </View>

                <View>
                  <Ionicons name='md-chatbubble-outline' size={27} color='white'/>
                  <Text style={{color:'white',fontWeight:600}}>1.1k</Text>
                </View>

                <Feather name='send' size={27} color='white' />

                <MaterialCommunityIcons name='dots-horizontal' size={27} color='white'/>
                <View style={{width:40,height:40,backgroundColor:'black',borderRadius:10,borderWidth:3,borderColor:'white',overflow:'hidden'}}>
                <Image source={item.profile} style={{width:40,height:40,borderRadius:20}}/>
                </View>
              </View>
            </View>

          </ImageBackground>
        )}
      
      />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:20,
    // backgroundColor:'red'

  },
  reel:{
    width:width,
    height:height-70
  },
  top:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    marginVertical:20
  },
  views:{
    width:width,
    height:300,
    backgroundColor:'rgba(0,0,0,0)',
    position:'absolute',
    bottom:0
  },
  view1:{
    width:width-100,
    height:'50%',
    // backgroundColor:'white',
    paddingVertical:20,
    paddingStart:5,
    bottom:0,
    position:'absolute',
    justifyContent:'flex-end'
  },
  view2:{
    width:width-341,
    height:'100%',
    
    right:0,
    position:'absolute',
    paddingVertical:20,
    alignItems:'center',
    justifyContent:'space-between'
  }
})

export default Reel