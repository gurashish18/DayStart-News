import React, { useContext } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking, Button } from 'react-native'
import { NewsContext } from '../API/contextapi'

const NewsArticle = ({item, index}) => {
    const {darkMode, setdarkMode} = useContext(NewsContext)
    const windowHeight = Dimensions.get("window").height
    const windowWidth = Dimensions.get("window").width
    return (
        <View style={{height: windowHeight,width: windowWidth}}>
            <Image source={{uri : item.urlToImage}} style={{...styles.image, width: windowWidth}}/>
            <View style={{backgroundColor: darkMode ? 'black' : '#ffffff'}}>
                <Text style={{...styles.title, color: darkMode ? '#ffffff' : 'black'}}>{item.title}</Text>
                <Text style={{...styles.description, color: darkMode ? '#ffffff' : 'black'}}>{item.description}</Text>

                <View style={styles.subcontainer}>
                    <Text style={{...styles.text2, color: darkMode ? 'lightgrey' : 'grey'}}>Published on: {item.publishedAt.slice(0, 10)}</Text>
                    <Text style={{...styles.text2, color: darkMode ? 'lightgrey' : 'grey'}}>Source: {item.source.name}</Text>
                </View>


                <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={{...styles.button_container,borderColor: darkMode ? '#ffffff' : 'black'}}>
                    <Text style={{...styles.button, color: darkMode ? '#ffffff' : 'black'}}>Read More...</Text>
                </TouchableOpacity>
    
            </View>
        </View>
    )
}

export default NewsArticle

const styles = StyleSheet.create({
    image:{
        height: '45%',
        resizeMode: 'cover'
    },
    text: {
        color: '#fff'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    description: {
        fontSize: 18,
        lineHeight: 25,
        marginBottom: 15
    },
    subcontainer:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text2:{
        fontStyle: 'italic'
    },
    button_container:{
        marginTop: 20,
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        // borderColor: '#ffffff',
    },
    button: {
    }
})
