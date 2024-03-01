import { Component } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { Hero } from "../hero";
import {
  ActivatedRoute,
  ParamMap,
  Router,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { HeroService } from "../hero.service";
import { CommonModule } from "@angular/common";
import { OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-hero-detail",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterLinkActive,FormsModule],
  templateUrl: "./hero-detail.component.html",
  styleUrl: "./hero-detail.component.scss",
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getHero(params.get("id")!))
    );
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    // this.router.navigate(["/superheroes", { id: heroId, foo: "foo" }]);
  }
}
