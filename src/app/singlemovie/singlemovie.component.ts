import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Cast, Movie, SingleMovie, Trailer } from '../models/movie.interface';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.scss']
})
export class SinglemovieComponent {


  carts? : SingleMovie[];
  //SingleMovie
  singlemovie?: SingleMovie;

  //Cast x SingleMovie
  moviecast?: Cast[];

  //Trailer
  movietrailer?: Trailer[];
  trailer?: Trailer;

 //SimilarMovie
  similarmovie?: Movie[];


  show: boolean = false;

  //X il carrello
  cartfilm:boolean = false;

  

  constructor(
    private ar: ActivatedRoute,
    private msService: ServiceService,
    private cartS: CartService
  ){ }

  ngOnInit(){
    
    this.callSingleMovie();
    this.callMovieCast();
    this.callTrailerMovie();
    this.callSimilarMovie();

  }

  
  
  
  callSingleMovie(){
    this.ar.params.subscribe((params: Params) => {
      this.msService.getSingleMovie(params['id'])
      .subscribe({
        // OK
        next: (smovie) => {
          this.singlemovie = smovie;
          this.cartfilm = this.cartS.checkAdded(this.singlemovie.id)
          this.singlemovie.price = 12;
        },
        // KO
        error: (e) => {
          alert("Stiamo avendo dei problemi riprova più tardi");
          console.error(e);
        }
      });
    });
  }

  callMovieCast(){
    this.ar.params.subscribe((params: Params) => {
      this.msService.getCastMovie(params['id']).subscribe((mcast) =>{
        this.moviecast = mcast.cast
      })
    });
  }

  callTrailerMovie(){
    this.ar.params.subscribe((params: Params) => {
      this.msService.getTrailerMovie(params['id'])
      .subscribe({
        // OK
        next: (trailermovie) => {
          this.movietrailer = trailermovie.results;
          this.trailer = this.movietrailer[2];
        },
        // KO
        error: (e) => {
          alert("Stiamo avendo dei problemi con il trailer riprova più tardi");
          console.error(e);
        }
      });
    });
  }

  callSimilarMovie(){
    this.ar.params.subscribe((params: Params) => {
      this.msService.getSimilarMovie(params['id'])
      .subscribe({
        // OK
        next: (similmovie) => {
          this.similarmovie = similmovie.results;
        },
        // KO
        error: (e) => {
          alert("Stiamo avendo dei problemi riprova più tardi");
          console.error(e);
        }
      });
    });
  }

  //Apertura del trailer
  showTrailer(){
    this.show = true;
  }

  //Chiusura del trailer
  closeTrailer(){
    this.show = false;
  }

  //Funzione per il push nel carrello
  pushCart(singlemovie: SingleMovie){
    
    this.cartfilm = this.cartS.checkAdded(singlemovie.id);
    this.cartS.addMovie(singlemovie);
    

  }




}
