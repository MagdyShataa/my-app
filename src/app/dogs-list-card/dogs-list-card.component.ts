import { Component, Input } from "@angular/core";
import { Dog, DogsService } from "../dogs.service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-dogs-list-card",
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: "./dogs-list-card.component.html",
  styleUrl: "./dogs-list-card.component.scss",
})
export class DogsListCardComponent {
  @Input() dog!: Dog;
  @Input() index!: number;
  constructor(public dogsService: DogsService) {}
}
