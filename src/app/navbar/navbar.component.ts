import { Component, HostListener, Input } from '@angular/core';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  change = false;


  


  constructor(
    private cartService: CartService
  ){}

  cart?: number;
  

  ngOnInit(){
    this.onScroll();
    this.cart = this.cartService.cart.length
  }

  @HostListener("document:scroll")

  onScroll(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      this.change = true;
    }
    else{
      this.change = false;
    }
  }

  
}
