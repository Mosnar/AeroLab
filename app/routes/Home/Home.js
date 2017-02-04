import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.main}>
                The current scene is titled {props.routes.scene.title}.
            </Text>
        </View>
    );
};

export default connect(({routes}) => ({routes}))(Home);
