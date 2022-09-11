/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initAxiosConfig} from './src/API/axios';

initAxiosConfig();

AppRegistry.registerComponent(appName, () => App);
