import React, {useContext} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NewsContext } from '../API/contextapi'

const Source = ({item, index}) => {

    const {setsource, darkMode, setdarkMode} = useContext(NewsContext)

    return (
        <TouchableOpacity style={styles.container} onPress={()=>setsource(item.id)}>
            <Image source={{uri:item.pic}} style={styles.image}/>
            <Text style={{color: darkMode ? '#ffffff' : 'black', textTransform: 'capitalize'}}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default Source

const styles = StyleSheet.create({
    container:{
        height: 130,
        margin: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    image: {
        height: "60%",
        width: "100%",
        resizeMode: "contain",
    }
})
