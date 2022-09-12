import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {CryptoSymbols} from './type';

export const getPrice = async (symbol: CryptoSymbols) => {
  const response = await axios.get(`/coin?symbol=${symbol}`);
  return response.data;
};

export const useGetCryptoPrice = (symbol: CryptoSymbols) => {
  const {isLoading, data} = useQuery(['getBTC'], () => getPrice(symbol), {
    refetchInterval: 1000,
  });
  return {data, isLoading};
};

export const getCryptoList = (): Promise<string[]> => {
  return new Promise(ressolve => {
    const list = ['BTCUSDT', 'ETHUSDT', 'SOLUSDT', 'ADAUSDT', 'LUNAUSDT'];

    ressolve(list);
  });
};
