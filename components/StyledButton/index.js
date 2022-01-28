import React from "react";
import { View, Text, Pressable } from 'react-native'
import styles from "./styles";
//***********************destructed properties below*************/
const StyledButton = ({ type, content, onPress }) => {
    // setting the color best on the value in the pressable button
    const backgroundColor = type === 'primary' ? '#171A20CC' : 'yellow'
    const textColor = type === 'primary' ? 'white' : '#171A20CC'

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button,
            { backgroundColor: backgroundColor }]} onPress={() => onPress()}>
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton;