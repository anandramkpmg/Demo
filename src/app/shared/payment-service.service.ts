import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  //formData:PaymentDetail;
  formData = new PaymentDetail(0,"", "", "", "");
  list : PaymentDetail[];
  readonly baseUrl = 'http://localhost:59035/api';

  constructor(private http : HttpClient) { }

  postData1()
  {
     return this.http.post(this.baseUrl+"/PaymentDetail",this.formData)
  }

  // postData(formData : PaymentDetail)
  // {
  //   return this.http.post(this.baseUrl +'/PaymentDetail', formData)
  // }

   postData()
  {
    return this.http.post(this.baseUrl +'/PaymentDetail', this.formData)
  }

  getAll()
  {
     this.http.get(this.baseUrl +'/PaymentDetail').toPromise()
     .then(res => this.list = res as PaymentDetail[])
  }

  delete(id)
  {
    console.log("In servo")
    this.http.delete(this.baseUrl+ '/PaymentDetail/' + id).subscribe(
      res => {console.log(res);
        this.getAll();
      },
      err => console.log(err)
    )
  }

}
