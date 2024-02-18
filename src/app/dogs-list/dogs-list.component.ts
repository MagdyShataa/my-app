import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { DogsService } from "../dogs.service";
import { DogsListCardComponent } from "../dogs-list-card/dogs-list-card.component";
@Component({
  selector: "app-dogs-list",
  standalone: true,
  imports: [CommonModule, DogsListCardComponent],
  templateUrl: "./dogs-list.component.html",
  styleUrl: "./dogs-list.component.scss",
})
export class DogsListComponent implements OnInit {
  constructor(readonly dogsService: DogsService) {}
  ngOnInit(): void {}
}
