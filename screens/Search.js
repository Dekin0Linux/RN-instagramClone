import { View, Text, SafeAreaView ,StyleSheet ,StatusBar, TextInput,Dimensions,Image} from 'react-native'
import React from 'react'
// import { StatusBar } from 'expo-status-bar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import COLORS from '../components/Colors'

const {width,height} = Dimensions.get('window')


import { Profile,Story } from '../components/Story'


const Search = () => {
  return (
   <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor='gray' barStyle='light-content'/>
    <View style={styles.searchBar}>
        <AntDesign name='search1' size={23} />
        <TextInput placeholder='Search' style={styles.input}/>
    </View>

    <View style={styles.imgCont}>
        {
            Story.map((item)=>(
                <Image source={item.image} style={styles.postImg} key={item.id}/>
            ))
        }
    </View>

   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 40
    },
    searchBar :{
        width:width-20,
        paddingHorizontal:10,
        paddingVertical:5,
        flexDirection:'row',
        backgroundColor:COLORS.gray,
        marginHorizontal: 10,
        borderRadius:10,
        alignItems:'center'
    },
    input:{
        flex: 1,
        marginHorizontal: 15
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

export default Search