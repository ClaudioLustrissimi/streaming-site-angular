import { Component } from '@angular/core';
import { Movie } from '../models/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  resultSearch?: Movie[];

  constructor(
    private ar:ActivatedRoute,
    private mvService: ServiceService
  ){}

    ngOnInit(){
      this.ar.queryParams.subscribe(p => {
        this.mvService.getSearchMovie(p["query"])
        .subscribe({
          // OK
          next: (sresults) => {
            this.resultSearch = sresults.results;
          },
          // KO
          error: (e) => {
            alert("Stiamo avendo dei problemi riprova più tardi");
            console.error(e);
          }
        });
      });
    }


}
