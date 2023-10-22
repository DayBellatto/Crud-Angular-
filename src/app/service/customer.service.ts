import { Injectable } from '@angular/core';
import  { Customer } from '../Model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers : Customer[] = []

  constructor() {
    const customer:Customer ={
      id:1,
      name:"Carlos",
      email:"carlos@carlos.com",
      dateOfBirth: new Date("1984-06-18")
    }

    this.customers.push(customer);

   }
  getList(): Customer[] {
      return this.customers;
  }
  getById(){

  }
  Update(){

  }

  delete(){

  }
}
