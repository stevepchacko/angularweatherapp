import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Locations } from '../location';
import { LocationFindService } from '../location-find.service';
import { WNavComponent } from "../w-nav/w-nav.component";



@Component({
  selector: 'app-sbar',
  templateUrl: './sbar.component.html',
  styleUrls: ['./sbar.component.css']
})
export class SbarComponent implements OnInit {
  term: boolean = false
  locations$: Observable<Locations[]>;
  private wnav: WNavComponent;

  constructor(private lfService: LocationFindService) { }

  ngOnInit(): void {
  }
  sClick(search: string): void {
    this.term = true;
    this.locations$= this.lfService.find(search);
  }

  rClick(): void{
    this.wnav.result=false;
  }

}
