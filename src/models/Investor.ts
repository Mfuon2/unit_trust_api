import {Model, ObjectID, Unique} from "@tsed/mongoose";
import {Default, Format, Maximum, MaxLength, Minimum, MinLength, Name, Property, Required} from "@tsed/schema";

@Model({ name: 'investors' })
@Name('InvestorModel')
export class Investor {
    @ObjectID('investorId')
    @Property()
    investorId: string;

    @Property()
    @MaxLength(100)
    @Required()
    firstName: string;

    @Property()
    @MaxLength(100)
    @Required()
    lastName: string;

    @Property()
    @Unique()
    @Minimum(0)
    @Maximum(100)
    email: string;


    @MaxLength(13)
    @MinLength(8)
    @Required()
    @Unique()
    phoneNumber: string;

    @Property()
    @Format('date-time') // or date-time, etc...
    createDate: Date;

    @Property()
    @Format('date-time')
    createdAt: Date;

    @Property()
    @Format('date-time')
    updatedAt: Date;

    @Property()
    isVerified: boolean;

    @Property()
    devices: ObjectID[];

    @Property()
    @Default(true)
    activeProfile: boolean;

    @Property()
    @Default(false)
    isDeleted: boolean;
}
