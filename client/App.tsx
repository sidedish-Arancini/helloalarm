import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const RootStack = createNativeStackNavigator();

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const queryClient = new QueryClient();

const App: React.FC<Props> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="행복한 코딩세상">
          <RootStack.Screen name="행복한 코딩세상" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
