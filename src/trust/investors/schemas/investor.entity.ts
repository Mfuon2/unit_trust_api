import {Document} from "mongoose";
import * as mongoose from "mongoose";

export interface Investor extends Document{
    readonly name: String,
    readonly age: Number,
    readonly email: String,
}
export const InvestorEntity = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});
