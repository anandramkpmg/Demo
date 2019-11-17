import { Component, OnInit } from '@angular/core';
import { PaymentServiceService } from 'src/app/shared/payment-service.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service : PaymentServiceService) { }

  ngOnInit() {
    this.service.getAll();
  }

  populate(payment: PaymentDetail)
  {
           this.service.formData = Object.assign({}, payment);
  }

  OnDelete(id: any)
  { 
    this.service.delete(id);
  }

}
