import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import {Investor} from "../models/Investor";
import {$log} from "@tsed/common";
import {ResponseWrapper} from "../utils/ResponseWrapper";

@Injectable()
export class InvestorRepository {
    @Inject(Investor)
    private model: MongooseModel<Investor>

    async findInvestors(): Promise<Investor[]>{
        return await this.model.find().exec()
    }

    async findByInvestorId(investorId: string): Promise<any> {
        let results = null
        try{
            results = await this.model.findOne({investorId}).exec();
        } catch (e) {
            $log.error(" --- error encountered --- ", e.message)
            return ResponseWrapper.FailResponse("Failed with reason ", e.message)
        }
        return ResponseWrapper.SuccessResponse("Fetched Successful", results)
    }
    async saveInvestor(investor: Investor): Promise<any> {
        return await this.model.create(investor)
    }



}
