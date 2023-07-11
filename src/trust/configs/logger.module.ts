import {Module} from "@nestjs/common";
import winston from "winston";
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import {CustomLoggerService} from "./logger.service";


@Module({
    providers: [
        CustomLoggerService
    ],
    exports:[CustomLoggerService]
})
export class CustomLoggerModule {}
