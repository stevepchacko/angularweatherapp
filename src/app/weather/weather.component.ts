import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationFindService } from '../location-find.service';
import { RootObject, ConsolidatedWeather } from '../weather';
import { Observable } from 'rxjs';
import {Locations} from '../location';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() location: Locations;
  
  rObject$ : Observable<RootObject>;
  root: RootObject;
  cWeather : ConsolidatedWeather[];
  
  constructor(
    private route: ActivatedRoute,
    private lfService: LocationFindService,
    
  ) { }

  ngOnInit(): void {
    this.getWeather().subscribe(root => {
      this.cWeather= root.consolidated_weather,
      this.root = root}
    );
  
  }

  getWeather(): Observable<RootObject>{
    const woeid = +this.route.snapshot.paramMap.get('id');
    console.log(woeid);
    return this.lfService.getWeather(woeid);
           // .subscribe(root => this.cWeather = root.consolidated_weather);        
  }

}
