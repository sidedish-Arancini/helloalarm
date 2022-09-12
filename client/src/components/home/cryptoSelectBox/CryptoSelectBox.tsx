import React, {FC, useEffect, useState} from 'react';
import {FlatList, Pressable, Text, View, ViewStyle} from 'react-native';
import {getCryptoList} from '../../../API/crypto/crypto';

interface Props {}

export const CryptoSelectBox: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  // const [cryptoList, setCryptoList] = useState([]);
  const [subscribeCryptoList, setSubscribeCryptoList] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const data = await getCryptoList();
  //     setCryptoList(data);
  //   })();
  // }, []);

  return (
    <>
      <View className="mb-2">
        <Text>Subscribe Crypto Symbols</Text>
      </View>
      <FlatList
        className="flex-row"
        data={subscribeCryptoList.map(v => ({item: v}))}
        renderItem={Badge}
      />
      <Pressable onPress={() => setOpen(!open)}>
        <View className="w-full h-10 border-solid border border-gray pl-2 pr-4 flex-row items-center justify-between">
          <Text>Select Crypto to Subscribe</Text>
          <Text className="text-medium">▿</Text>
        </View>
      </Pressable>
    </>
  );
};

const Badge = ({item}: {item: {item: string}}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 20,
        paddingVertical: 5,
        paddingRight: 5,
        paddingLeft: 10,
        marginRight: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        flexGrow: 1,
      }}>
      <Text>{item.item}</Text>
    </View>
  );
};
