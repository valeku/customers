import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers/customers.service';
import { Customer } from '../../services/customers/customer/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  
  id: number;
  edit: string;
  private subscription: Subscription;
  customer: Customer;

  showDetail = false
  showAdd = false
  showUpdate = false

  constructor(
    private router: Router,
    private customersService: CustomersService,
    private activateRoute: ActivatedRoute
  ) 
  { 
    this.subscription = activateRoute.params.subscribe(
      (params) => {
        this.id=params['id']
        this.edit=params['edit']
        console.log(params['edit'])
      }
    );
    this.customer = new Customer();
  }

  ionViewWillEnter() {
    this.showDetail = false
    this.showAdd = false
    this.showUpdate = false

    if (this.id != undefined) {
      if (this.edit != undefined) {
        this.showUpdate = true
      } else {
        this.showDetail = true
      }
    } else {
      this.showAdd = true
    }

    if (this.id != undefined) {
      this.customersService.getById(this.id).subscribe((req) => {
        this.customer = req
      })
    }
  }

  ngOnInit() {

  }

  editCustomer() {
    this.showUpdate = true
    this.showDetail = false
  }

  updateCustomer() {
    this.customersService.update(this.id, this.customer).subscribe((req) => {
      this.showUpdate = false
      this.showDetail = true

    })
  }

  saveCustomer(){
    this.customersService.create(this.customer).subscribe((res) => {

      this.router.navigate(['/customers'], {});
    })

  }

  back() {
    this.router.navigate(['/customers/'])
  }

}
