import React, {FC, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {useGetCryptoList} from '../../../API/crypto/crypto';
import {CryptoSelectItem} from './CryptoSelectItem';

interface Props {}

export const CryptoSelectBox: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {data} = useGetCryptoList();
  const [subscribeCryptoList, setSubscribeCryptoList] = useState<string[]>([
    'BTCUSDT',
    'AUCTIONBUSD',
    'EHTUSDT',
  ]);

  const subscribeCrypto = (crypto: string) => {
    setSubscribeCryptoList(cryptoList => [crypto, ...cryptoList]);
  };

  return (
    <View className="px-3">
      <View className="mb-2">
        <Text>구독 중인 코인</Text>
      </View>
      <ScrollView horizontal className="mb-2">
        {subscribeCryptoList.map(crypto => (
          <Badge key={crypto} crypto={crypto} />
        ))}
      </ScrollView>
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <View className="w-full h-10 border-solid border border-gray pl-2 pr-4 flex-row items-center justify-between">
          <Text>구독할 코인을 선택하세요</Text>
          <Text className="text-medium">▿</Text>
        </View>
      </Pressable>
      {data && isOpen && (
        <ScrollView className="max-h-[165px] border border-gray-200 divide-y bg-orange-50">
          {data.map(crypto => (
            <CryptoSelectItem
              key={crypto}
              name={crypto}
              onPress={subscribeCrypto}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const Badge = ({crypto}: {crypto: string}) => {
  return (
    <View
      className="bg-orange-300"
      style={{
        flexDirection: 'row',
        borderRadius: 20,
        paddingVertical: 5,
        paddingRight: 5,
        paddingLeft: 10,
        marginRight: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      }}>
      <Text>{crypto}</Text>
    </View>
  );
};
