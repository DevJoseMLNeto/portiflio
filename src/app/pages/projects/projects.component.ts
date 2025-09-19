import { Component, ElementRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

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
