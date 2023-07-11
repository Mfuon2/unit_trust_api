import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvestorsService } from './investors.service';
import { CreateInvestorDto } from './dto/create-investor.dto';
import { UpdateInvestorDto } from './dto/update-investor.dto';
import {ApiTags} from "@nestjs/swagger";
import {Investor} from "./schemas/investor.entity";
import {CustomLoggerService} from "../configs/logger.service";

@Controller('investors')
@ApiTags("Investors")
export class InvestorsController {
  constructor(private readonly investorsService: InvestorsService, private readonly logService: CustomLoggerService) {
  }

  @Post()
  async create(@Body() createInvestorDto: CreateInvestorDto): Promise<Investor> {
    this.logService.log("===> ")
    return await this.investorsService.create(createInvestorDto);
  }

  @Get()
  findAll() {
    return this.investorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvestorDto: UpdateInvestorDto) {
    return this.investorsService.update(+id, updateInvestorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.investorsService.remove(+id);
  }
}
