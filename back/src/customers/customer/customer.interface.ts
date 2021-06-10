import { Document } from 'mongoose';

export interface ICustomer extends Document{
    isbn: string;
    customer: string;
    author: string;
    publisher: string;
    year: number;
}