import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Movie } from '../models/movie.interface';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  //Boolian for Popup
  popup = false;
  popupclick = false;

  online = false;

  constructor(
    private msService: ServiceService,
    private router: Router,
  ){}

  //Popular Movie
  popularmovie?: Movie[];

  //Trending Movie
  trendingmovie?: Movie[];

  //Toprated Movie
  topratedmovie?: Movie[];

  //Dichiaro una stringa vuota per il form
  chiave: string = "";

  ngOnInit(){
    this.callPopularMovie();
    this.callTrendingMovie();
    this.callTopRatedMovie();
  }


  callPopularMovie(){
    this
    .msService
    .getPopularMovie()
    .subscribe({
      // OK
      next: (movie) => {
        this.popularmovie = movie.results;
      },
      // KO
      error: (e) => {
        alert("Stiamo avendo dei problemi riprova più tardi");
        console.error(e);
      }
    });
  }

  callTrendingMovie(){
    this
    .msService
    .getTrendingMovie()
    .subscribe({
      // OK
      next: (tmovie) => {
        this.trendingmovie = tmovie.results;
      },
      // KO
      error: (e) => {
        alert("Stiamo avendo dei problemi riprova più tardi");
        console.error(e);
      }
    });
  }

  callTopRatedMovie(){
    this
    .msService
    .getTopRatedMovie()
    .subscribe({
      // OK
      next: (trmovie) => {
        this.topratedmovie = trmovie.results;
      },
      // KO
      error: (e) => {
        alert("Stiamo avendo dei problemi riprova più tardi");
        console.error(e);
      }
    });
  }

  //Funzione per la ricerca del film scritto nel search
  submitForm(){
    this.router.navigate(
    ['/searchmovie'],
    {queryParams: {query: this.chiave}}
    );
  }

  closePopup(){
    this.popup = false; 
  }

  closePopupClick(){
    this.popupclick = false; 
  }


  controllOn(){
    this.online = true;
    this.controlloPopupClick();
  }

   //Controllo del popup click su un film
  controlloPopupClick(){
    if(this.online === true){
      this.popupclick = true;
    }
    else{
      this.popupclick = false;
    }
  }

}
