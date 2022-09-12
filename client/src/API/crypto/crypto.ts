import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {CryptoSymbols} from './type';

export const getPrice = (symbol: CryptoSymbols) => {
  return axios({
    method: 'get',
    url: `/symbol=${symbol}`,
  });
};

const url = 'http://localhost:3000/coin?symbol=BTCUSDT';
export const getBTC = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const useGetBTC = () => {
  const {isLoading, data} = useQuery(['getBTC'], getBTC);
  return {data, isLoading};
};

export const getCryptoList = (): Promise<string[]> => {
  return new Promise(ressolve => {
    const list = ['BTCUSDT', 'ETHUSDT', 'SOLUSDT', 'ADAUSDT', 'LUNAUSDT'];

    ressolve(list);
  });
};
