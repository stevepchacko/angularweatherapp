import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {SbarComponent} from '../sbar/sbar.component';

@Component({
  selector: 'app-w-nav',
  templateUrl: './w-nav.component.html',
  styleUrls: ['./w-nav.component.css']
})
export class WNavComponent implements OnInit{
  public result: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}

}
