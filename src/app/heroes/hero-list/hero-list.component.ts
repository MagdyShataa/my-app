import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-list",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterLinkActive],
  templateUrl: "./hero-list.component.html",
  styleUrl: "./hero-list.component.css",
})
export class HeroListComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(private service: HeroService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get("id")!, 10);
        return this.service.getHeroes();
      })
    );
  }
}
