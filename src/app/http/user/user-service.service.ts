import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  token :any
  baseUrl = environment.baseUrl
  constructor(private httpClient: HttpClient) { }
    
  post(url, data) {
    console.log('checking url=>>',url);
    
    console.log('http service data ===>', data);
    let response=this.httpClient.post(this.baseUrl + url, data);
    this.token=response
    console.log(this.token);
    
    // console.log("response from server=>>>>",response);

    return response;
  }
}
