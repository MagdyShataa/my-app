import { Routes } from "@angular/router";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { PageNotFoundComponent } from "./heroes/page-not-found/page-not-found.component";
import { HeroListComponent } from "./heroes/hero-list/hero-list.component";
import { AdminComponent } from "./admin/admin.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "list" },
  { path: "list", component: DogsListComponent },
  {
    path: "details/:index",
    loadComponent: () =>
      import("./dog-view/dog-view.component").then((m) => m.DogViewComponent),
  },
  { path: "heroes", component: HeroListComponent },

  {
    path: "hero/:id",
    loadComponent: () =>
      import("./heroes/hero-detail/hero-detail.component").then(
        (m) => m.HeroDetailComponent
      ),
  },
  { path: "Admin", component: AdminComponent },
  { path: "template-driven", component: TemplateDrivenComponent },

  { path: "**", component: PageNotFoundComponent },
];
