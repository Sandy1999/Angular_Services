import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  title:string;
  heroes : Hero[];
  constructor(private homeService:HomeService) { }

  getHeroes(): void{
    this.heroes = this.homeService.getheores();
  }
  ngOnInit() {
    // this.title = this.homeService.homeMethod()
    this.getHeroes();
  }

}

export interface Hero{
  id:number;
  name:string;
}
