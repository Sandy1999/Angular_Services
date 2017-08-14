import { Injectable } from '@angular/core';
import { Hero } from "./home.component";
import { HEROES } from "./mock-hero";

@Injectable()
export class HomeService {
    homeMethod(){
        return 'Hello World!!!!'
    }

    getheores(): Hero[]{
        return HEROES;
    }

    constructor() { }
}