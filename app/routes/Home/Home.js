import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Home
      </Text>
    </View>
  );
};


export default Home;
