import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/services/customers/customer/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  customers: Customer[] = []
  navigate: any

  constructor(
    private router: Router,
    private customersService: CustomersService,
    private changeDetection: ChangeDetectorRef
    ) {
    }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.customersService.getAll().subscribe((data) => {
      console.log('ionViewWillEnter responce' + JSON.stringify(data) );
      this.customers = data;
    })
  }

  ionViewDidEnter(){
    this.changeDetection.detectChanges();
  }

  deleteCustomer(customer, id) {
    this.customers = this.customers.filter((v, i) => i !== id)
    this.customersService.deleteCustomer(customer._id).subscribe((req) => {

    })
  }

  getCustomer(customer) {
    this.router.navigate(['/customer/' + customer._id])
  }

  editCustomer(customer) {
    this.router.navigate(['/customer/' + customer._id + '/edit'])
  }

  addCustomer(){
    this.router.navigate(['/customer'], {})
  }

  back() {
    this.router.navigate(['/home'])
  }

}
