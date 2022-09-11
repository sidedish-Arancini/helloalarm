import { Controller, Get, Query } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CryptoSymbols } from './cryptoType';

@Controller('coin')
export class CryptoController {
  constructor(private readonly service: CryptoService) {}

  @Get()
  async getPrice(@Query() param: { symbol: string }): Promise<string> {
    return await this.service.getPrice(param.symbol as CryptoSymbols);
  }
}
