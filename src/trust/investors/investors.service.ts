import {Inject, Injectable} from '@nestjs/common';
import {CreateInvestorDto} from './dto/create-investor.dto';
import {UpdateInvestorDto} from './dto/update-investor.dto';
import {Model} from "mongoose";
import {Investor} from "./schemas/investor.entity";

@Injectable()
export class InvestorsService {
  constructor(
      @Inject('INVESTOR_MODEL')
      private investorModel: Model<Investor>,
  ) {}

  async create(createInvestorDto: CreateInvestorDto) : Promise<Investor> {
    const createdCat = await new this.investorModel(createInvestorDto);
    return createdCat.save();
  }

  async findAll() : Promise<Investor[]> {
    return await this.investorModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} investor`;
  }

  update(id: number, updateInvestorDto: UpdateInvestorDto) {
    return `This action updates a #${id} investor`;
  }

  remove(id: number) {
    return `This action removes a #${id} investor`;
  }
}
