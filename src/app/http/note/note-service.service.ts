import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl
  constructor(
    private httpClient: HttpClient,
  ) { }

  post(url, data) {
    console.log('checking url=>>', url);

    const httpOptions = {
      headers: new HttpHeaders({

        'token': localStorage.getItem('token')
      })
    }

    console.log('http service data ===>', data);

    console.log(this.baseUrl + url);
    
    let response = this.httpClient.post(this.baseUrl + url, data, httpOptions);
    console.log("hello");
    
    console.log(response);



    return response;
  }

  get(url) {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    }
    let response = this.httpClient.get(this.baseUrl + url, httpOptions);
    console.log(response);
    return response;
  }
  // delete(url,note){

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'token': localStorage.getItem('token')
  //     })
  //   }

  //   let response=this.httpClient.delete(this.baseUrl+url,note,httpOptions);   
  //   console.log("response in http ======>",response);
  //   return response;
    
  // }
  
}
