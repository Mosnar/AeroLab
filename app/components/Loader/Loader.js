import React, {
    Component,
} from 'react';

import {Text, View} from 'react-native';
import styles from './styles';

class Loader extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

}

Loader.propTypes = {
};

export default Loader;
