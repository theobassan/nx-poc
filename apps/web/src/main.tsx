import { AppRegistry } from 'react-native';
import { App } from '@copilot/app';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});