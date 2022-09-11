import React, {FC} from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <View style={tw`bg-blue-100`}>
      <Text>coin alarm</Text>
    </View>
  );
};
