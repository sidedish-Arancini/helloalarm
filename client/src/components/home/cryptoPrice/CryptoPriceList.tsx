import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {CryptoPrcieItem} from './CryptoPrcieItem';

interface Props {}

export const CryptoPriceList: FC<Props> = () => {
  return (
    <View className="mt-4">
      <View className="flex-row bg-orange-100 px-3 py-2">
        <Text className="w-8/12">코인</Text>
        <Text className="w-4/12 text-center">가격</Text>
      </View>
      <View className="px-3">
        <CryptoPrcieItem name={'BTCUSDT'} />
      </View>
    </View>
  );
};
