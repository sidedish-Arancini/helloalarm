import React, {FC} from 'react';
import {View} from 'react-native';
import {CryptoPriceList} from '../components/home/cryptoPrice/CryptoPriceList';

import {CryptoSelectBox} from '../components/home/cryptoSelectBox/CryptoSelectBox';

interface Props {}

const HomeScreen: FC<Props> = () => {
  return (
    <View className="pt-5">
      <CryptoSelectBox />
      <CryptoPriceList />
    </View>
  );
};

export default HomeScreen;
