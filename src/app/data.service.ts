/*eslint-disable*/
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private url: string =  '/getproducts';
constructor(private http:HttpClient){
  }
  getProducts(){
    return this.http.get('http://localhost:7777/getproducts'); 
  }
    removeProduct(item:any){
    let obj={id:item._id}
    return this.http.post('http://localhost:7777/removeproduct',obj,{responseType:'text'})
    } 
    addProduct(item:any){
    return this.http.post('http://localhost:7777/addproduct',item,{responseType:'text'}); }}