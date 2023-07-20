import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { MovieCast, MovieResult, MovieTrailer, Trailer } from '../models/movie.interface';
import { SingleMovie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

  apikey: string = "6ce26d5a25f793037cffea6c56d27f13";

getPopularMovie(): Observable<MovieResult> {
  return this.http.get<MovieResult>("https://api.themoviedb.org/3/movie/popular?api_key="+this.apikey);
}

getTrendingMovie(): Observable<MovieResult> {
  return this.http.get<MovieResult>("https://api.themoviedb.org/3/trending/all/day?api_key="+this.apikey);
}

getTopRatedMovie(): Observable<MovieResult> {
  return this.http.get<MovieResult>("https://api.themoviedb.org/3/movie/top_rated?api_key="+this.apikey+"&language=en-US&page=1");
}

getSingleMovie(id: number){
  return this.http.get<SingleMovie>("https://api.themoviedb.org/3/movie/"+id+"?api_key="+this.apikey+"&language=en-US&page=1",
  {params: {chiave: id}}
  );
}

getCastMovie(id: number){
  return this.http.get<MovieCast>("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key="+this.apikey+"&language=en-US",
  {params: {chiave: id}}
  );
}

getTrailerMovie(id: number){
  return this.http.get<MovieTrailer>("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key="+this.apikey+"&language=en-US",
  {params: {chiave: id}}
  );
}

getSimilarMovie(id: number){
  return this.http.get<MovieResult>("https://api.themoviedb.org/3/movie/"+id+"/similar?api_key="+this.apikey+"&language=en-US&page=1",
  {params: {chiave: id}}
  );
}

getSearchMovie(chiave: string): Observable<MovieResult>{
  return this.http.get<MovieResult>("https://api.themoviedb.org/3/search/movie?api_key="+this.apikey+"&query="+chiave);
}


}
