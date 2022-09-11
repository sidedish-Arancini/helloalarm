import React, {FC, useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import SelectBox, {Item} from 'react-native-multi-selectbox-typescript';
import {getCryptoList} from '../../../API/crypto/crypto';

interface Props {}

export const CryptoSelectBox: FC<Props> = () => {
  const [cryptoList, setCryptoList] = useState<Item[]>([]);
  const [subscribeCryptoList, setSubscribeCryptoList] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getCryptoList();
      setCryptoList(data);
    })();

    handleCryptoClick({item: 'BTCUSDT', id: 'BTCUSDT'});
  }, []);

  const handleCryptoClick = (item: Item) => {
    setSubscribeCryptoList([item, ...subscribeCryptoList]);
  };

  return (
    <>
      <View className="mb-2">
        <Text>SELECT CRYPTO</Text>
      </View>

      <SelectBox
        label="Select Crypto to subscribe!"
        options={cryptoList}
        selectedValues={subscribeCryptoList}
        onMultiSelect={handleCryptoClick}
        onTapClose={onMultiChange()}
        isMulti
      />
    </>
  );
};
