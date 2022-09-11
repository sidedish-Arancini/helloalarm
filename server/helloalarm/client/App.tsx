import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PriceScreen from './src/screens/PriceScreen';

const RootStack = createNativeStackNavigator();

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const App: React.FC<Props> = ({name, baseEnthusiasmLevel = 0}) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="HOME">
        <RootStack.Screen name="HOME" component={HomeScreen} />
        <RootStack.Screen name="PRICE" component={PriceScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
