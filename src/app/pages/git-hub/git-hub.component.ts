import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-hub',
  imports: [],
  templateUrl: './git-hub.component.html',
  styleUrl: './git-hub.component.css'
})
export class GitHubComponent {

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
