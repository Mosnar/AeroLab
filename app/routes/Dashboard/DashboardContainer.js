import React, {
    Component,
} from 'react';

import {connect} from 'react-redux';
var ScrollableTabView = require('react-native-scrollable-tab-view');

import Featured from './Featured';

import {
    getRecipes
} from '../../actions/recipes';


class FeaturedContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getRecipes();
    }


    render() {
        return (
            <ScrollableTabView tabBarPosition="bottom">
                <Featured tabLabel="Featured" />
            </ScrollableTabView>
        );
    }
}


FeaturedContainer.propTypes = {};

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
    };
}
const actions = {
    getRecipes
};

export default connect(mapStateToProps, actions)(FeaturedContainer);
