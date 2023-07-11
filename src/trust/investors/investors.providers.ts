import { Injectable } from '@nestjs/common';
import {Connection} from "mongoose";
import {InvestorEntity} from "./schemas/investor.entity";

export const investorsProviders = [
    {
        provide: 'INVESTOR_MODEL',
        useFactory: (connection: Connection) => connection.model('Investor', InvestorEntity),
        inject: ['DATABASE_CONNECTION'],
    }
]
