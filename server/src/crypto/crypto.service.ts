import { Injectable } from '@nestjs/common';
import Binance from 'node-binance-api';
import { CryptoSymbols } from './cryptoType';

const binance = new Binance();

@Injectable()
export class CryptoService {
  async getPrice(symbol: CryptoSymbols = 'BTCUSDT'): Promise<string> {
    const futuresPrice = await binance.futuresPrices();
    const cryptoPrice = futuresPrice[symbol];

    return cryptoPrice;
  }

  async getCoinList(): Promise<CryptoSymbols[]> {
    const futuresPrice = await binance.futuresPrices();
    return Object.keys(futuresPrice) as CryptoSymbols[];
  }
}
