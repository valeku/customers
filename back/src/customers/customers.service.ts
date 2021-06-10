import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ICustomer } from './customer/customer.interface';
import { CustomerDto } from './customer/customer.dto';
import { UpdateCustomerDto } from './customer/update-customer.dto';


@Injectable()
export class CustomersService {
    constructor(@InjectModel('Customer') private readonly customerModel:  Model<ICustomer>) {}

    async create(customer: CustomerDto): Promise<ICustomer> {
        const newCustomer = new this.customerModel(customer);
        return await newCustomer.save();
    }

    async getAll(): Promise<ICustomer[]> {
        return await this.customerModel.find().exec()
    }

    async getById(id: string): Promise<ICustomer> {
        return await this.customerModel.findById(id)
    }

    async update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<ICustomer> {
        return this.customerModel.findByIdAndUpdate(id, updateCustomerDto)
    }
    
    async remove(id: string): Promise<ICustomer> {
        return await this.customerModel.findByIdAndRemove(id)
    }

}
