import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';

interface Props {
  name: string;
  onPress: (crypto: string) => void;
}

export const CryptoSelectItem: FC<Props> = ({name, onPress}) => {
  return (
    <Pressable onPress={() => onPress(name)}>
      <View className="px-3 py-2">
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
};
