import { View, Text, SafeAreaView,StyleSheet,Dimensions, ScrollView,Image, FlatList, ImageBackground, SectionList } from 'react-native'
import React,{useState} from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//importing feed
import {Story,Feed} from '../components/Story'
import COLORS from '../components/Colors'
import FeedComp from '../components/Feed'

const {width,height} = Dimensions.get('window')

const logo = {uri:'https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png'}


const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
        {/* topbar */}
        <View  style={styles.top}>
            <Image source={logo} style={{width:132,height:50}}/>
            <View  style={{flexDirection:'row'}}>
                <AntDesign name='hearto' size={23}/>
                <Feather name='send' size={23} style={{marginLeft:10}}/>
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

        {/* story */}
        <View>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:1,paddingVertical:10,alignItems:'center'}}
            >
                {
                    Story.map((item,index)=>(
                        <View style={styles.storyItem} key={index}>
                            <Image source={item.image} style={{width:'100%',height:'100%',borderRadius:50}}/>
                            <Text style={{textAlign:'center',paddingTop:3,fontSize:13}}>{item.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
        {/* End of story */}

        {/* <View style={{paddingBottom:10, marginBottom:10}}>
            <FlatList
            data={Feed}
            contentContainerStyle={{paddingVertical:0}}
            renderItem={({item})=>(
                <FeedComp item={item}/>
            )}
            />
        </View> */}
        {
            Feed.map((item)=>(
                <FeedComp item={item} key={item.id}/>
            ))
        }

        {/* <Text>POSt</Text>
        <Text>POSt</Text>
        <Text>POSt</Text>
        <Text>POSt</Text>
        <Text>POSt</Text>
        <Text>POSt</Text> */}



        </ScrollView>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop : 40,
        flex:1,
        // backgroundColor:'skyblue'
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 10,
        alignItems:'center'
    },
    storyItem:{
        width: 80,
        height:80,
        borderRadius:60,
        marginBottom: 35,
        marginLeft: 15,
        padding:2,
        borderColor:COLORS.secondary,
        borderWidth:2,
    },
    
})

export default HomeScreen