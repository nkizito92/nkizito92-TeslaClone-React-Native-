import React from "react"
import { StyleSheet } from "react-native"
const styling = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    carContainer: {
        width: '100%',
        height: '100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '600'
    },
    subtitle: {
        fontSize: 20,
        alignItems: 'center',
        color: '#5c5e62'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    }


})

export default styling