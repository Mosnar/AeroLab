import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

class AeroLab extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home" component={}
                </Scene>
            </Router>
        );
    }
}

module.exports = AeroLab;