import HomeScreen from './screens/HomeScreen';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
    Home: HomeScreen
}, {
        'initialRouteName': 'Home',
        headerMode: 'none'
    });

const Router = createAppContainer(App);

export default Router;