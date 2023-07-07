import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import {Investor} from "../models/Investor";

@Injectable()
export class InvestorRepository {
    @Inject(Investor)
    private investorRepository: MongooseModel<Investor>

    async findInvestors(): Promise<Investor[]>{
        return await this.investorRepository.find().exec()
    }

    async findById(investorId: string): Promise<any> {
        return await this.investorRepository.find({investorId:investorId}).exec();
    }
    async saveInvestor(investor: Investor): Promise<any> {
        return await this.investorRepository.create(investor)
    }



}
