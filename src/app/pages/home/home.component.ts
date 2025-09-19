import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


@ViewChild('nave') nave!: ElementRef;
@ViewChild('rastro') rastro!: ElementRef;
@ViewChild('main') main!: ElementRef;


constructor(private router: Router){

}


partida(marcha: number){
  this.nave.nativeElement.classList.toggle("turbinaAcelerando")
  this.rastro.nativeElement.classList.toggle("rastroAcelerando")
  this.main.nativeElement.classList.toggle("girandoMain")
 switch (marcha){
  case 1:
    setTimeout(()=>{
      this.router.navigate(["/projetos"])
    },1650)
    
    break;
  case 2:
    setTimeout(()=>{
      this.router.navigate(["/gitHub"])
    },1650)
    break;  
  case 3:
    setTimeout(()=>{
      this.router.navigate(["/sobreMim"])
    },1650)
    break;  
 }
}

turbinas(v: boolean){
  this.nave.nativeElement.classList.toggle("turbinaAtiva")
}



}
