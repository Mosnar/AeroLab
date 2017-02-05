import React, {
    Component,
} from 'react';

import {connect} from 'react-redux';

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
        let featured = (
            <Featured recipes={this.props.recipes}/>
        );
        return featured;
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
