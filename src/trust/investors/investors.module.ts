import { Module } from '@nestjs/common';
import { InvestorsService } from './investors.service';
import { InvestorsController } from './investors.controller';
import {investorsProviders} from './investors.providers';
import {DatabaseModule} from "../database/database.module";
import {CustomLoggerModule} from "../configs/logger.module";

@Module({
  controllers: [InvestorsController],
  providers: [InvestorsService, ...investorsProviders],
  imports: [DatabaseModule, CustomLoggerModule]
})
export class InvestorsModule {}
