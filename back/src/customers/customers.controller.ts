import { Controller } from '@nestjs/common';
import {
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query
    } from '@nestjs/common';
import { from } from 'rxjs';

import { CustomerDto } from './customer/customer.dto';
import { ICustomer } from './customer/customer.interface';
import { CustomersService } from '../customers/customers.service';
import { UpdateCustomerDto } from './customer/update-customer.dto';


@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Post()
    create(@Body() customerDto: CustomerDto): Promise<ICustomer> {
        console.log('CustomersController customerDto: '+ JSON.stringify(customerDto))
        return this.customersService.create(customerDto);
    }

    @Get()
    getAll(): Promise<ICustomer[]> {
        console.log('CustomersController getAll: ')
        return this.customersService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id): Promise<ICustomer> {
        console.log('CustomersController getById id: '+ id)
        return this.customersService.getById(id);
    }
 
    @Put(':id')
    update(@Body() updateCustomerDto: UpdateCustomerDto, @Param('id') id: string): Promise<ICustomer> {
        return this.customersService.update(id, updateCustomerDto)
    }
    

    @Delete(':id')
    remove(@Param('id') id: string): Promise<ICustomer> {
        return this.customersService.remove(id);
    }
    

}

