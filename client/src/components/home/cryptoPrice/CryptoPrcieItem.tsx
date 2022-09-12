import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useGetCryptoPrice} from '../../../API/crypto/crypto';

interface Props {
  name: string;
}

export const CryptoPrcieItem: FC<Props> = ({name}) => {
  const {data} = useGetCryptoPrice(name);
  return (
    <View className="py-3">
      <View className="flex-row justify-between">
        <Text className="w-8/12">{name}</Text>
        <Text className="w-4/12 text-center">{data}</Text>
      </View>
    </View>
  );
};
