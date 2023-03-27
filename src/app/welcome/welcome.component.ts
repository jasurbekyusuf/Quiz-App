import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey !: ElementRef

  public routeGame: string = ""

  constructor(){}

  ngOnInit(): void {

  }

  startGame(){
    if(this.nameKey.nativeElement.value === ""){
      alert("Please enter your name")
      this.routeGame=="welcome"
    }
    localStorage.setItem("name", this.nameKey.nativeElement.value)
    this.routeGame="question"
  }
}
