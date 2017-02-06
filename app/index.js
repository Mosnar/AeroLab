import React, {Component} from 'react';
import {
    Router,
    Scene,
    Actions,
} from 'react-native-router-flux';

import {connect, Provider} from 'react-redux';
import store from './config/store';

import DashboardContainer from './routes/Dashboard';

const RouterWithRedux = connect()(Router);

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="dashboard" component={DashboardContainer} hideNavBar={true}/>
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
