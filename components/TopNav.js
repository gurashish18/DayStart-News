import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { NewsContext } from '../API/contextapi';

const TopNav = ({index, setindex}) => {
    const {fetchNews, darkMode, setdarkMode} = useContext(NewsContext)
    return (
        <View style={{...styles.container, backgroundColor: darkMode ? 'black' : '#ffffff'}}>
            {index === 0 ?
            (
                <TouchableOpacity style={styles.left_sec} onPress={() => setdarkMode(!darkMode)}>
                    <Text>
                        <MaterialIcons name="invert-colors-on" size={30} color={darkMode ? '#ffffff' : 'black'} />
                    </Text>
                </TouchableOpacity>
            )
            :
            (
                <TouchableOpacity style={{...styles.left_sec, color: darkMode ? '#ffffff' : 'black'}} onPress={()=>setindex(index === 0 ? 1 : 0)}>
                    <AntDesign name="arrowleft" size={20} color={darkMode ? '#ffffff' : 'black'} />
                    <Text style={{...styles.text, color: darkMode ? '#ffffff' : 'black'}}>Discover</Text>
                </TouchableOpacity>
            )}

            <Text style={{...styles.center, color: darkMode ? '#ffffff' : 'black'}}>
                {index===0 ? "Discover" : "All News"}
            </Text>

            <View>
                {index === 0 ?
                (
                    <TouchableOpacity style={styles.right_sec} onPress={()=>setindex(index === 0 ? 1 : 0)}>
                        <Text style={{...styles.text, color: darkMode ? '#ffffff' : 'black'}}>All News</Text>
                        <AntDesign name="arrowright" size={20} color={darkMode ? '#ffffff' : 'black'} />
                    </TouchableOpacity>
                ) : 
                (
                    <TouchableOpacity style={styles.right_sec} onPress={() => fetchNews("general")}>
                        <Ionicons name="reload" size={24} color={darkMode ? '#ffffff' : 'black'} />
                    </TouchableOpacity>   
                )}
            </View>
        </View>
    )
}

export default TopNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
    },
    left_sec: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    center: {
        fontSize: 24,
        letterSpacing: 2,
        fontWeight: 'bold'
    },
    right_sec:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5
    },
    text: {

    }
})
