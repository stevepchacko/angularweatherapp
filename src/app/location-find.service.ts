import { Injectable } from '@angular/core';
//import { from } from 'rxjs';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Locations } from "./location";
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { ConsolidatedWeather, RootObject } from './weather';



@Injectable({
  providedIn: 'root'
})
export class LocationFindService {
  private locationUrl = 'https://www.metaweather.com/api/location/search/?query=';//url for fetching the location query data
  private weatherUrl = 'https://www.metaweather.com/api/location/';//https://www.metaweather.com/api/location/44418/ url for fetching the data required for weather forecast for the five days
  private location: string;
  private u: ConsolidatedWeather[];
  private c: Observable<RootObject>;
  

  constructor(
    private http: HttpClient,

  ) {
   }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


   private errorHandler<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    } }

  find(search: string): Observable<Locations[]>{
    const url= `${this.locationUrl}${search}`
    return this.http.get<Locations[]>(url)
    .pipe(catchError(this.errorHandler<Locations[]>('listLocations', []))
    );
  }

  getWeather(woeid: number): Observable<RootObject>{
    const url= `${this.weatherUrl}${woeid}/`;
    return this.http.get<RootObject>(url);
    //this.u= this.c.consolidated_weather;    
    //.subscribe.map(this.u=> this.u=Weather.RootObject.consolidated_weather);
    //.pipe(
     // catchError(this.errorHandler<Weather.RootObject>('weatherfor5days',[]))
    //);
    //return this.http.get<(this.weatherUrl);  
    //.map((res: Response) => res.json().consolidated_weather) 
  }

  
}
