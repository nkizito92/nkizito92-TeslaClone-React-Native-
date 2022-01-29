import { Dimensions, StyleSheet } from "react-native"
const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        /* use Dimension for single page apps to scroll to next page 
          like word documents*/
        height: Dimensions.get('window').height
    },
    buttonsContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: '80%',
        width: '100%',
        zIndex: 20
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
    subtitleCTA: {
        textDecorationLine: 'underline'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        zIndex: 0
    }


});

export default styles