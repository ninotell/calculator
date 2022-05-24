import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    calculatorButtonContainer: {
        height: 90,
        width: 90,
        backgroundColor: "white",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    content: {
        fontSize: 30,
        fontWeight: "500"
    },

})

export default styles