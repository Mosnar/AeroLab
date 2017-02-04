import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

export default StyleSheet.create({
    noRecipes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    container: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 15,
        marginBottom: 8
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    author: {
        color: '#656565'
    }
});
