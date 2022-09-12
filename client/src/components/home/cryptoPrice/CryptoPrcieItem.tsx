import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface Props {
  name: string;
}

export const CryptoPrcieItem: FC<Props> = ({name}) => {
  return (
    <View className="py-3">
      <View className="flex-row justify-between">
        <Text className="w-8/12">{name}</Text>
        <Text className="w-4/12 text-center">10000</Text>
      </View>
    </View>
  );
};
