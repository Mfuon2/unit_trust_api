import {Controller, Inject} from "@tsed/di";
import {ArrayOf, Get, Post, Returns} from "@tsed/schema";
import {BodyParams, PathParams} from "@tsed/platform-params";
import {InvestorRepository} from "../../repositories/InvestorRepository";
import {Investor} from "../../models/Investor";
import {PlatformResponse, Res} from "@tsed/common";

@Controller("/investor")
export class InvestorController {

    @Inject() private investorRepository: InvestorRepository

    @Get("/") @Returns(200, Array).Of(Investor)
    async getAll(@Res() response: PlatformResponse): Promise<PlatformResponse<Investor[]>> {
        return response.body(this.investorRepository.findInvestors());
    }

    @Get("/:investorId") @Returns(200, Investor).AnyOf(Promise<PlatformResponse<Investor>>)
    async getOneInvestor(@Res() response: PlatformResponse, @PathParams("investorId") id: string): Promise<PlatformResponse<Investor>> {
        return response.body(this.investorRepository.findById(id));
    }

    @Post("/createOrUpdate")
    @Returns(200, Investor).AnyOf(Promise<PlatformResponse<Investor>>)
    async createOrUpdateInvestor(@Res() response: PlatformResponse, @BodyParams("investor") investor: Investor): Promise<PlatformResponse<Investor>> {
        return response.body(this.investorRepository.saveInvestor(investor));
    }
}
