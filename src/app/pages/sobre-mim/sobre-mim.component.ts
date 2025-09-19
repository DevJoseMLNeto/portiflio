import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mim',
  imports: [],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent {
  
@ViewChild('main') main!: ElementRef;

constructor(private router: Router){

}


  voltar(){
  this.main.nativeElement.classList.toggle("girandoMainReverse")
    setTimeout(()=>{
      this.router.navigate(["/home"])
    },1000)
}
}
