import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentServiceService } from 'src/app/shared/payment-service.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service : PaymentServiceService) { }

  paymentDetail = new PaymentDetail(0,"", "", "", "");

  ngOnInit() {
  }

  resetForm(formData : NgForm)
  {
    if(formData != null)
    {
      formData.form.reset();
    }
       
  }

  OnSubmit()
  {

    this.service.postData().subscribe(
      res => {
        console.log(res);
        this.service.formData.PMId = 0;
        this.service.formData.CardNumber = '';
        this.service.formData.CardOwnerName = '';
        this.service.formData.ExpirationDate = '';
        this.service.formData.CVV = '';
        this.service.getAll();
      },

      //   this.service.postData(this.paymentDetail).subscribe(
      // res => {
      //   console.log(res);
      //   this.paymentDetail.PMId = 0;
      //   this.paymentDetail.CardNumber = '';
      //   this.paymentDetail.CardOwnerName = '';
      //   this.paymentDetail.ExpirationDate = '';
      //   this.paymentDetail.CVV = '';
      //   this.service.getAll();
      // },

      err => console.log(err)
    )
  }

 /* OnSubmit1(formData:NgForm)
  {
    if(formData != null)
    {
      this.service.postData().subscribe(
        res => {
            this.resetForm(formData);
        },
        err => {console.log(err)}
      );
    }

  }*/

}
