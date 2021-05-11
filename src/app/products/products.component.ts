import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  public name: any;
  public price: any;
  @Output() eventProduct=new EventEmitter(); 
  constructor(private dataService:DataService) { }
  ngOnInit() { this.loadProducts();
  }
  loadProducts(){ this.dataService.getProducts().subscribe(data=>{
    this.products=data;
    console.log(this.products)})
  }
  addProduct(){ this.dataService.addProduct({name:this.name,price:this.price}).subscribe(data=>{
      console.log(data);
      this.sendEvent()
      this.loadProducts()
      this.name=null;
      this.price=null;
    })
  }
  sendEvent(){
    this.eventProduct.emit(); 
    }
}
