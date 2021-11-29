import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import DiscoverScreen from '../screens/DiscoverScreen'
import NewsScreen from '../screens/NewsScreen'
import TopNav from './TopNav'
import {NewsContext} from '../API/contextapi'

const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });
  

  export default function Tabs() {
    const layout = useWindowDimensions();
  
    const { index, setindex } = useContext(NewsContext);
    const [routes] = useState([
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ]);
  
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setindex}
        initialLayout={{ width: layout.width }}
        renderTabBar={()=><TopNav index={index} setindex={setindex}/>}
      />
    );
  }

const styles = StyleSheet.create({})
