import {ScrollView,View} from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularItems from '../../components/Home/PopolarItems'

import AllItem from '../../components/Home/AllItems'

export default function home(){
    return(
        <View>
            <Header/>
        <ScrollView>
            
            <Slider/>
            <Category/>
            <PopularItems/>
            <AllItem/>
            
        </ScrollView>
        </View>
    )
}

