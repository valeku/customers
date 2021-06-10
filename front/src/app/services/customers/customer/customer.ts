export class Customer {
  number: number;
  name:   string;
  address: string;
  phone:  string;
  _id:    any;

    constructor(value: Object = {}){
        Object.assign(this, value);
    }
  }