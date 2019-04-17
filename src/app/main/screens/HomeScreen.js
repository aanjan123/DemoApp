import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { Home } from '@pages'

class HomeScreen extends Component {
    render() {
        const { navigation } = this.props
        return (
            <ScrollView>
                <Home navigation={navigation} />
            </ScrollView>
        );
    }
}

export default HomeScreen;
