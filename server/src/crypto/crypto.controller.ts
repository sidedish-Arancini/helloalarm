import { Controller, Get, Query } from '@nestjs/common';
import { CryptoPriceListType, CryptoService } from './crypto.service';
import { CryptoSymbols } from './cryptoType';

@Controller('coin')
export class CryptoController {
  constructor(private readonly service: CryptoService) {}

  @Get()
  async getPrice(
    @Query() param: { symbols: string },
  ): Promise<CryptoPriceListType> {
    const symbols = JSON.parse(param.symbols);

    return await this.service.getPrice(symbols as CryptoSymbols[]);
  }

  @Get('/list')
  async getCryptoList() {
    return await this.service.getCoinList();
  }
}
