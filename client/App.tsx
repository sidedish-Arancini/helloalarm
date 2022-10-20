import React, {useRef} from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import WebView from 'react-native-webview';

const RootStack = createNativeStackNavigator();

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const queryClient = new QueryClient();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App: React.FC<Props> = () => {
  let webviewRef = useRef<any>();

  const handleSetRef = (_ref: any) => {
    webviewRef = _ref;
  };

  const handleEndLoading = (e: any) => {
    console.log('handleEndLoading');

    webviewRef.postMessage('로딩 완료시 webview로 정보를 보내는 곳');
  };

  /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
  const handleOnMessage = ({nativeEvent: {data}}: {nativeEvent: any}) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(data);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={navTheme}>
        <WebView
          onLoadEnd={handleEndLoading}
          onMEssage={handleOnMessage}
          ref={handleSetRef}
          source={{uri: 'http://localhost:8082/'}}
        />
        {/* <RootStack.Navigator initialRouteName="행복한 코딩세상">
          <RootStack.Screen name="행복한 코딩세상" component={HomeScreen} />
        </RootStack.Navigator> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
