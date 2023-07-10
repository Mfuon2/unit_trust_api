import { Module } from '@nestjs/common';
import { TrustController } from './trust/controllers/trust.controller';
import { TrustService } from './trust/service/trust.service';
import {TrustModule} from "./trust/modules/trust.module";

@Module({
  imports: [TrustModule]
})
export class AppModule {}
