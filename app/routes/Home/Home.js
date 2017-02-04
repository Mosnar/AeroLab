import React, {
    Component,
} from 'react';

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
            <TouchableHighlight key={recipe.id} onPress={() => console.warn('noop')} underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{recipe.title}</Text>
                            <Text style={styles.author}>{recipe.author}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <ListView
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
