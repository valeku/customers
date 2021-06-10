import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomerSchema } from './customer/customer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
