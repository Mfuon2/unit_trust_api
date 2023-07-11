import {ApiProperty} from "@nestjs/swagger";


export class CreateInvestorDto{
    @ApiProperty()
    readonly age: number;
    @ApiProperty()
    readonly email: string;
    @ApiProperty()
    readonly name: string;
}
