import React, { useState, createContext, useEffect } from "react";
import axios from "axios"
import { getNewsAPI, getSourceAPI } from './api'

export const NewsContext = createContext();

const Context = ({children}) => {
    const [news, setnews] = useState([])
    const [category, setcategory] = useState("general")
    const [source, setsource] = useState()
    const [index, setindex] = useState(0)
    const [darkMode, setdarkMode] = useState(true)
    const [country, setcountry] = useState("in")

    const fetchNews = async() => {
        const { data } = await axios.get(getNewsAPI(category))
        setnews(data)
        setindex(1)
    }

    const fetchNewsFromSource = async() => {
        const { data } = await axios.get(getSourceAPI(source))
        setnews(data)
        setindex(1)
    }

    const fetchNewsFromCountry = async() => {
        const { data } = await axios.get(getNewsAPI(category, country))
        setnews(data)
        setindex(1)
    }

    useEffect(() => {
        fetchNews()
    }, [category])

    useEffect(() => {
        fetchNewsFromSource();
      }, [source]);

    useEffect(() => {
        fetchNewsFromCountry();
      }, [country]);

    return (
        <NewsContext.Provider value={{index, setindex, news, fetchNews, setcategory, setsource, darkMode, setdarkMode, country, setcountry}}>
            {children}
        </NewsContext.Provider>
    )
}

export default Context