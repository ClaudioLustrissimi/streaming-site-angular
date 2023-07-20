import { Component } from '@angular/core';
import { SingleMovie } from '../models/movie.interface';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartMovie?: SingleMovie[];

  

  constructor(
    private CartS: CartService
  ){}

  totale = 0;
  totfilm = this.cartMovie?.length;

  ngOnInit(){
    this.CartS.checkCarrello();
    this.getTotale();
    if(this.cartMovie !== null){
      this.cartMovie = this.CartS.checkCarrello();
    }

    
  }

  getTotale(){
    let carrello = this.CartS.cart;
    
    for(let film of carrello){
      this.totale += film.price;
    }

    return this.totale;
    
  }

  removeMovie(m: SingleMovie){
    this.CartS.checkRemove(m.id);
    this.totale -= m.price;
  }
  
}
