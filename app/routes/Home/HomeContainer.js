import React, {
    Component,
} from 'react';

import {connect} from 'react-redux';

import Home from './Home';

import {
    getRecipes
} from '../../actions/recipes';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let promise = this.props.getRecipes();
        promise.then(function () {
            console.log('hey');
        }.bind(this));
    }


    render() {
        return (
            <Home />
        );
    }
}


HomeContainer.propTypes = {};

function mapStateToProps(state) {
    return {
        recipes: state,
    };
}
const actions = {
    getRecipes
};

export default connect(mapStateToProps, actions)(HomeContainer);
