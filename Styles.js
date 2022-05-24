import { StyleSheet } from 'react-native'

const eerieBlack = "#141414ff";
const jet = "#373737ff";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: eerieBlack,
        color: "white",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 40,
    },
    input: {
        backgroundColor: jet,
        color: "white",
        width: "100%",
        height: 320,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontSize: 70,
        textAlignVertical: 'center',
        textAlign: 'right'
    },
    bodyContainer: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
    },
    numbersContainer: {
        maxWidth: "75%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    symbolsContainers: {
        maxWidth: "25%"
    }
})

export default styles