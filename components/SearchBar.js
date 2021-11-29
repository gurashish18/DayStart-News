import React, {useContext, useState} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, Dimensions } from 'react-native'
import { NewsContext } from '../API/contextapi'
import { Entypo } from '@expo/vector-icons'
import NewsArticle from './NewsArticle'

const SearchBar = () => {
    const {news : {articles}, darkMode, setdarkMode} = useContext(NewsContext)

    const windowHeight = Dimensions.get("window").height

    const [searchResults, setsearchResults] = useState([])
    const [modalVisible, setmodalVisible] = useState(false)
    const [currentNews, setcurrentNews] = useState()

    const handleSearch = (text) => {
        if(!text)
        {
            setsearchResults([])
            return;
        }
        setsearchResults(articles.filter((query) => query.title.includes(text)))
    }

    const handleModal = (n) => {
        setcurrentNews(n)
        setmodalVisible(true)
    }

    return (
        <View style={styles.container}>
            <TextInput style={{...styles.searchinput, color: '#ffffff', backgroundColor: darkMode ? 'grey' : 'black'}} placeholder="Search news here..." placeholderTextColor={"white"} onChangeText={(text) => handleSearch(text)}/>
            <View style={styles.searchResults}>
                {searchResults.slice(0, 10).map((n) => (
                    <TouchableOpacity key={n.title} activeOpacity={0.7} onPress={() => handleModal(n)}>
                            <Text style={{...styles.singleResult, backgroundColor: darkMode ? '#ffffff' : 'black',color: darkMode ? 'black' : '#ffffff'}}>
                                {n.title}
                            </Text>
                    </TouchableOpacity>
                ))}
            </View>

                <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setmodalVisible(!modalVisible)}} style={{backgroundColor: darkMode ? 'black' : '#ffffff', height: windowHeight}}>
                    <TouchableOpacity onPress={() => setmodalVisible(!modalVisible)} style={{position: "absolute",zIndex: 2,right: 0,margin: 20}}>
                        <Entypo name="cross" size={30} color="white" />
                    </TouchableOpacity>
                    <View style={{ height: "100%" }}>
                        <NewsArticle item={currentNews} />
                    </View>
                </Modal>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%'
    },
    searchinput: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 18,
        marginBottom: 20,
    },
    searchResults:{
        position: "absolute",
        zIndex: 1,
        top: 50,
    },
    singleResult:{
        borderRadius: 5,
        padding: 10,
        margin: 0.5,
        shadowColor: "black",
        elevation: 5,
    }
})
