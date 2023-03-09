import { View, Text, FlatList,Dimensions,StyleSheet ,Image} from 'react-native'
import React from 'react'
import { Feed } from './Story'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import COLORS from '../components/Colors'

const {width,height} = Dimensions.get('window')

const FeedComp = ({item}) => {
  return (
    <View style={styles.feedContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <Image source={item.profile} style={{width:40,height:40,borderRadius:20}}/>
                <Text style={{fontWeight:600}}>{item.name}</Text>
            </View>
            <MaterialCommunityIcons name='dots-horizontal' size={25}/>
        </View>

        <Image source={item.feed} style={{width: width-10 ,height:330}}/>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:6}}>
            <View style={{flexDirection:'row',gap:15}}>
                <AntDesign name={item.liked ? 'heart':'hearto'} size={23} color={item.liked ? 'red': 'black'}/>
                <Ionicons name='md-chatbubble-outline' size={23}/>
                <Feather name='send' size={23}/>
            </View>
            <Feather name='bookmark' size={23}/>
        </View>

        <Text  style={{fontWeight:600}}>{item.likes} likes</Text>
        
        <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:600,paddingRight:10}}>{item.name}</Text>
            <Text>{item.caption}</Text>
        </View>

        <Text style={{fontSize:10}}>{item.time}</Text>



    </View>
    
  )
}


const styles =StyleSheet.create({
    feedContainer:{
        width: width-10,
        // backgroundColor:'lightblue',
        marginVertical: 10,
        height : 470,
        marginHorizontal: 5,
        overflowL:'hidden'
    }
})

export default FeedComp