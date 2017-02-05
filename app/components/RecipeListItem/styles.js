import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            height: 3,
            width: 3
        },
        borderRadius: 2,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 2
    },
    title: {
        fontSize: 15,
        marginBottom: 8
    },
    author: {
        fontSize: 17,
        color: '#484848',
        fontWeight: 'bold'
    }
});
