import { Injectable, Input } from '@angular/core';
import { SingleMovie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: SingleMovie[] = [];

  mostrafilm: boolean = true;

  totale = 0;

  constructor() { }

  addMovie(m: SingleMovie){
    if(this.mostrafilm === true){
      this.cart.push(m);
      alert('Film aggiunto');
    }
    else{
      alert('Impossibile aggiungere il Film al Carrello sembra che già sia presente')
    }
  }

  getAllMovie(){
    this.cart.length;
  }




  saveToStorage(){
    localStorage.setItem("TheMovie", JSON.stringify(this.cart));

    const mostracarrello = localStorage.getItem("TheMovie");

    if(mostracarrello !== null){
      this.cart = JSON.parse(mostracarrello);
    }
    else{
      this.cart = [];
    }


  }

  checkCarrello(){
    return this.cart;
  }

  checkAdded(id: number){
    for(let object of this.cart){
      if(object.id === id){
        return false
      }
    }
    return true;
  }

  checkRemove(id: number){
    for(let object of this.cart){
      if(object.id === id){
        this.cart.splice(this.cart.indexOf(object));
      }
    }

    
  }

  
}
