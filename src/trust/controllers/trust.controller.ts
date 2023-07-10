import { Controller, Get } from '@nestjs/common';
import { TrustService } from '../service/trust.service';

@Controller()
export class TrustController {
  constructor(private readonly appService: TrustService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
