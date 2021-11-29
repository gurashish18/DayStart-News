import React, {useContext, useState} from 'react'
import { Dimensions, StyleSheet, Text, View, Picker } from 'react-native'
import { categories, sources } from '../API/api'
import Carousel from 'react-native-snap-carousel';
import Category from '../components/Category';
import Source from '../components/Source';
import SearchBar from '../components/SearchBar';
import { NewsContext } from '../API/contextapi';
import { countries } from '../API/api';

const DiscoverScreen = () => {

    const {darkMode, setdarkMode, country, setcountry} = useContext(NewsContext)
    // const [selectedValue, setSelectedValue] = useState("in");

    const windowWidth = Dimensions.get("window").width
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5)

    return (
        <View style={{backgroundColor: darkMode ? 'black' : '#ffffff', flex:1, padding: 10}}>
            <SearchBar />
            <Text style={{...styles.title, color: darkMode ? '#ffffff' : 'black'}}>Select your Country</Text>
            <Picker selectedValue={country} style={{ height: 100, width: '100%', color: darkMode ? '#ffffff' : 'black'}} onValueChange={(itemValue, itemIndex) => setcountry(itemValue)}>
                {countries.map((c) =>(
                    <Picker.Item label={c.name} value={c.code} />
                ))}
            </Picker>
            <View style={styles.subcontainer}>
                <Text style={{...styles.title, color: darkMode ? '#ffffff' : 'black'}}>categories</Text>
                <Carousel
                    layout={'default'} 
                    data={categories}
                    sliderWidth={windowWidth}
                    itemWidth={SLIDE_WIDTH}
                    renderItem={({ item, index }) => (
                        <Category item={item} index={index} />
                    )}
                />
            </View>

            <View style={styles.subcontainer}>
                <Text style={{...styles.title, color: darkMode ? '#ffffff' : 'black'}}>sources</Text>
                <Carousel
                    layout={'default'} 
                    data={sources}
                    sliderWidth={windowWidth}
                    itemWidth={SLIDE_WIDTH}
                    renderItem={({ item, index }) => (
                        <Source item={item} index={index} />
                    )}
                />
            </View>
        </View>
    )
}

export default DiscoverScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    subcontainer: {
        padding: 10,
    }
})
