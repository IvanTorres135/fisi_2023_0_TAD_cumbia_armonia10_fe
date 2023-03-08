import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  mobileQuery: MediaQueryList;
  
  //fillerNav=Array.from({length:50},(_,i)=>`Nav Item ${i+1}`);
  fillerNav=[
    {name:"Inicio",route:"inicio"},
    {name:"Emitir Recibos",route:"emitir"},
    {name:"Visualizar Recibos",route:"visualizar"},
    {name:"Salir",route:""},
  ]
  fillerContent=Array.from({length:50},()=> `Hola probando`);

  private _mobileQueryListener:()=>void;

  constructor(changeDetectorRef:ChangeDetectorRef, media:MediaMatcher){
    this.mobileQuery=media.matchMedia('(max-width:600px)');
    this._mobileQueryListener=()=>changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun=true;

  
}
