import { Injectable } from "@angular/core";
import { MessageService } from "../message.service";
import { Observable, map, of } from "rxjs";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
  
  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find((hero) => hero.id === +id)!)
    );
  }
}
