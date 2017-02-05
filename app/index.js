import React, {Component} from 'react';
import {
    Router,
    Scene,
    Actions,
} from 'react-native-router-flux';

import {connect, Provider} from 'react-redux';
import store from './config/store';

import FeaturedContainer from './routes/Featured';

const RouterWithRedux = connect()(Router);

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="featured" component={FeaturedContainer} hideNavBar={true}/>
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
