import { Routes } from "@angular/router";
import { DogsListComponent } from "./dogs-list/dogs-list.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "list" },
  { path: "list", component: DogsListComponent },
  {
    path: "details/:index",
    loadComponent: () =>
      import("./dog-view/dog-view.component").then((m) => m.DogViewComponent),
  },
];
