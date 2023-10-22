import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers : Customer[] = []
// depois que implementa o OnInit é obrigatorio criar um metodo ngOnInit
  constructor(private customerServices:CustomerService){
  }
  ngOnInit():void{
    this.customers = this.customerServices.getList();
    // this.customerService.getList()
  }
}
