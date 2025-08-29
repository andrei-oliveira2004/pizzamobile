
import {NavigationContainer} from '@react-navigation/native'
import { View,StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content"  />
        <Routes />
      </NavigationContainer>
  );
}

