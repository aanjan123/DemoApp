/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src/app/main/Root';
import {name as appName} from './app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Root);
