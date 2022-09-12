import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const getPrice = async (symbol: string) => {
  const response = await axios.get(`/coin?symbol=${symbol}`);
  return response.data;
};

export const useGetCryptoPrice = (symbol: string) => {
  const {isLoading, data} = useQuery(
    ['getprice', symbol],
    () => getPrice(symbol),
    {
      refetchInterval: 1000,
    },
  );
  return {data, isLoading};
};

const getCryptoList = async (): Promise<string[]> => {
  const response = await axios.get(`/coin/list`);
  return response.data;
};

export const useGetCryptoList = () => {
  const {data} = useQuery(['getCryptoList'], getCryptoList);
  return {data};
};
