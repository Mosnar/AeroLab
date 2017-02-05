import React, {
    Component,
} from 'react';

import RecipeListItem from '../../components/RecipeListItem';

import {Text, View, ListView, TouchableHighlight} from 'react-native';
import styles from './styles';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.recipes.data)
        });
    }

    componentDidMount() {
    }


    _renderRecipe(recipe) {
        return (
            <RecipeListItem recipe={recipe}/>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <ListView
                    contentInset={{bottom:49}}
                    automaticallyAdjustContentInsets={false}
                    withSections={false}
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={this._renderRecipe.bind(this)}
                />
            </View>
        );
    }

}

export default Home;
