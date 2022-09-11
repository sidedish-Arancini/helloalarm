import React, {FC} from 'react';
import {View} from 'react-native';

import {CryptoSelectBox} from '../components/home/cryptoSelectBox/CryptoSelectBox';

interface Props {}

const HomeScreen: FC<Props> = () => {
  return (
    <View className="px-3 pt-5">
      <CryptoSelectBox />
    </View>
  );
};

export default HomeScreen;
