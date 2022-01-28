import React from "react"
import { View, FlatList, Dimensions } from 'react-native'
import cars from "../../assets/cars"
import CarItem from "../CarItem"
import styles from "./styles"
const CarsList = () => {
    return (
        <View style={styles.container}>
            {/* use FlatList give the data property an array 
        and for renderItem the value you want to pass */}
            {/* Dimensions is added to snap to next page */}
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                // in FlatList this properties will snap page to the start and preview
                // for remain in between pages
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList