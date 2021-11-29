import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {NewsContext} from '../API/contextapi'
import Carousel from 'react-native-snap-carousel';
import NewsArticle from '../components/NewsArticle';

const NewsScreen = () => {
    const {news : {articles}} = useContext(NewsContext)

    const windowHeight = Dimensions.get("window").height

    const [activeindex, setactiveindex] = useState()
    
    return (
        <View style={styles.container}>
            {articles && (
                <Carousel
                    firstItem={articles.slice(0, 10).length - 1}
                    layout="stack"
                    data={articles.slice(0, 10)}
                    sliderHeight={300}
                    itemHeight={windowHeight}
                    vertical={true}
                    onSnapToItem={(index) => setactiveindex(index)}
                    renderItem={({ item, index }) => (
                        <NewsArticle item={item} index={index} />
                    )}
                />
            )}
        </View>
    )
}

export default NewsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})
