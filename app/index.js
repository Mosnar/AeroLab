import React, {Component} from 'react';
import {
    Router,
    Scene,
    Actions,
} from 'react-native-router-flux';

import {connect, Provider} from 'react-redux';
import store from './config/store';

import HomeContainer from './routes/Home';

const RouterWithRedux = connect()(Router);

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" component={HomeContainer} title="Home"/>
    </Scene>
);

class AeroLab extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux scenes={scenes}/>
            </Provider>
        );
    }
}

module.exports = AeroLab;
