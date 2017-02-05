import React, {
    Component,
} from 'react';

import {Text, View, ListView, TouchableHighlight} from 'react-native';
import styles from './styles';

class RecipeListItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let recipe = this.props.recipe;
        return (
            <TouchableHighlight style={styles.container} key={recipe.id} onPress={() => console.warn('noop')}
                                underlayColor='#dddddd'>
                <View>
                    <Text style={styles.author}>{recipe.author.toUpperCase()}</Text>
                    <Text style={styles.title}>{recipe.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

}

RecipeListItem.propTypes = {
    recipe: React.PropTypes.object.isRequired
};

export default RecipeListItem;
