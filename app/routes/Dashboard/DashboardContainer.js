import React, {
    Component,
} from 'react';

import Featured from './Featured';

import ScrollableTabView from 'react-native-scrollable-tab-view';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollableTabView tabBarPosition="bottom">
                <Featured tabLabel="Featured"/>
            </ScrollableTabView>
        );
    }
}

export default DashboardContainer;
