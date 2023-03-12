import { View, Text ,Image} from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Search from '../screens/Search'
import ProfileScreen from '../screens/ProfileScreen'
import Post from '../screens/Post'
import Reel from '../screens/Reel'


const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        headerShown:false
    }}>
        <Tab.Screen name='HomeScreen' component={HomeScreen} 
        options={{
            tabBarIcon:({focused,color})=>(
                <View style={{alignItems:'center'}}>
                    <Octicons name='home' size={25} color={'black'}/>
                    {
                        focused ? <View style={{width:5,height:5,backgroundColor:'red',borderRadius:2.5}}></View> : ''
                    }
                    
                </View>
               
            )
        }}
        />

        <Tab.Screen name='Search' component={Search} 
        options={{
            tabBarIcon:({focused,color})=>(
                <View style={{alignItems:'center'}}>
                    <Octicons name='search' size={25} color={'black'}/>
                    {
                        focused ? <View style={{width:5,height:5,backgroundColor:'red',borderRadius:2.5}}></View> : ''
                    }
                    
                </View>
               
            )
        }}
        />

        <Tab.Screen name='Post' component={Post} 
        options={{
            tabBarIcon:({focused,color})=>(
                <View style={{alignItems:'center'}}>
                    <Feather name='plus-square' size={25} color={'black'}/>
                    {
                        focused ? <View style={{width:5,height:5,backgroundColor:'red',borderRadius:2.5}}></View> : ''
                    }
                    
                </View>
               
            )
        }}
        />

        <Tab.Screen name='Reel' component={Reel} 
        options={{
            tabBarIcon:({focused,color})=>(
                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons name='movie-play' size={25} color={'black'}/>
                    {
                        focused ? <View style={{width:5,height:5,backgroundColor:'red',borderRadius:2.5}}></View> : ''
                    }
                    
                </View>
               
            )
        }}
        />

        <Tab.Screen name='Profile' component={ProfileScreen} 
        options={{
            tabBarIcon:({focused,color})=>(
                <View style={{alignItems:'center'}}>
                    
                    <Image style={{width:35,height:35,borderRadius:20}} source={{uri:'https://i.pravatar.cc/150?img=49'}}/>
                    {
                        focused ? <View style={{width:5,height:5,backgroundColor:'red',borderRadius:2.5}}></View> : ''
                    }
                    
                </View>
               
            )
        }}
        />
    </Tab.Navigator>
  )
}

export default Tabs