import { Module } from '@nestjs/common';
import {TrustController} from "../controllers/trust.controller";
import {TrustService} from "../service/trust.service";

@Module({
  controllers: [TrustController],
  providers: [TrustService],
  exports: [TrustService]
})
export class TrustModule {}
