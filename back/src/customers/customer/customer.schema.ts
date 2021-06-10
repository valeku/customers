import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    number: Number,
    name: String,
    address: String,
    phone: String
});