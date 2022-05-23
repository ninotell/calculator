import { StyleSheet } from 'react-native'

const eerieBlack = "#141414ff";
const jet= "#373737ff";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: eerieBlack,
        color: "white",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    input:{
        backgroundColor: jet,
        color: "white",
        width: "100%",
        height: 330,
        paddingHorizontal: 30,
        borderRadius: 30,
        fontSize: 70,
        textAlignVertical: 'center',
        textAlign: 'right'
    },
    bodyContainer:{
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center'
    },
    numbersContainer:{
        width: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})

export default styles