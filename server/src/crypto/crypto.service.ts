import { Injectable } from '@nestjs/common';
import Binance from 'node-binance-api';
import { CryptoSymbols } from './cryptoType';

const binance = new Binance();

export type CryptoPriceListType = { symbol: CryptoSymbols; price: number }[];

@Injectable()
export class CryptoService {
  async getPrice(
    symbols: CryptoSymbols[] = ['BTCUSDT'],
  ): Promise<CryptoPriceListType> {
    const futuresPrice = await binance.futuresPrices();
    const cryptoPriceList = symbols.map((symbol) => {
      return { symbol, price: futuresPrice[symbol] };
    });

    return cryptoPriceList;
  }

  async getCoinList(): Promise<CryptoSymbols[]> {
    const futuresPrice = await binance.futuresPrices();
    return Object.keys(futuresPrice) as CryptoSymbols[];
  }
}
