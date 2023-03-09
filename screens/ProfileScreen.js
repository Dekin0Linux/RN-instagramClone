import { View, Text ,StyleSheet, SafeAreaView,StatusBa,Image, TouchableOpacity, FlatList,Dimensions, ScrollView} from 'react-native'
import React from 'react'

import { Profile,Story } from '../components/Story'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'

import COLORS from '../components/Colors'

const {width,height} = Dimensions.get('window')

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* <StatusBar backgroundColor='gray' barStyle='light-content'/> */}
        
        <View style={styles.title}>
            <Text style={{fontWeight:700,fontSize:19}}>{Profile.name}<AntDesign name='caretdown' size={13} color={'black'}/></Text>
            <View style={{flexDirection:'row'}}>
                <Feather name='plus-square' size={25} color={'black'}/>
                <Feather name='menu' size={25} color={'black'} />
            </View>
        </View>

        <ScrollView>

        <View style={styles.top}>
            <Image source={Profile.profileImage} style={{width:60,height:60,borderRadius:30}}/>

            <View style={{alignItems:'center'}}>
                <Text>{Profile.post}</Text>
                <Text style={{fontWeight:500,fontSize:16}}>Posts</Text>
            </View>
            <View  style={{alignItems:'center'}}>
                <Text>{Profile.followers}</Text>
                <Text style={{fontWeight:500,fontSize:16}}>Followers</Text>
            </View>
            <View  style={{alignItems:'center'}}>
                <Text>{Profile.following}</Text>
                <Text style={{fontWeight:500,fontSize:16}}>Following</Text>
            </View>
        </View>

        {/* ProfileDetail */}
        <View style={styles.textContainer}>
            <Text style={{fontWeight:500,fontSize:16}}>{Profile.username}</Text>
            <Text>{Profile.tag}</Text>
        </View>

        <View style={styles.tabs}>
            <TouchableOpacity>
                <Text style={styles.tabItem}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.tabItem}>Share Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.tabItem}>Contact</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
            <Text style={{fontWeight:600,fontSize:16}}>Story highlights</Text>
            <Text>Keep your favorite stories on you profile</Text>
        </View>
        
        <View style={[styles.textContainer]}>
            <TouchableOpacity style={styles.highlight}>
                <Feather name='plus' size={25} color={'black'}/>
            </TouchableOpacity>
            <Text style={{marginLeft:15}}>New</Text>
        </View>

            <View style={{marginVertical:20}}>
                <View style={styles.imgCont}>
                    {
                        Story.map((item)=>(
                            <Image source={item.image} style={styles.postImg} key={item.id}/>
                        ))
                    }
                </View>

                
            </View>

       
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container:{
    flkex:1,
    marginTop:30
   },
   top:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal: 10,
    alignItems:'center',
    marginTop: 10
   },
   title:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal: 10,
    marginTop: 15
   },
   tabs:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:COLORS.gray,
    padding: 10
   },
   tabItem:{
    backgroundColor:'#dedede',
    color:'black',
    padding:5,
    borderRadius: 8,
    paddingHorizontal: 25,
   }
   ,highlight:{
    justifyContent:'center',
    alignItems:'center',
    borderColor: 'black',
    borderWidth: 2,
    width:60,
    height:60,
    borderRadius: 30,
    marginVertical: 10,
    // marginHorizontal: 10

   },
   textContainer:{
    marginHorizontal: 10
   },
   postImg:{
    width:width/3,
    height: 130,

   },
   imgCont:{
    flexDirection:'row',
    flexWrap:'wrap'
   }
})

export default ProfileScreen