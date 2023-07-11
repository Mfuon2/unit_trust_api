import { Module } from '@nestjs/common';
import {databaseProviders} from "../configs/database.provider";

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule {}
