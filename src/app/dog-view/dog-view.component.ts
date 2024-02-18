import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable, map } from "rxjs";
import { Dog, DogsService } from "../dogs.service";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: "app-dog-view",
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: "./dog-view.component.html",
  styleUrl: "./dog-view.component.scss",
})
export class DogViewComponent implements OnInit{
  dog$!: Observable<Dog | undefined>;

  constructor(
    private dogsService: DogsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dog$ = this.route.paramMap.pipe(
      map((params) => {
        return this.dogsService.dogs[Number(params.get("index"))];
      })
    );
  }
}
