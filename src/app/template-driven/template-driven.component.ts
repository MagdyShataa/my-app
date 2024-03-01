import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from "@angular/forms";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { ReactiveFormsComponent } from "../reactive-forms/reactive-forms.component";

@Component({
  selector: "app-template-driven",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsComponent
  ],
  templateUrl: "./template-driven.component.html",
  styleUrl: "./template-driven.component.scss",
})
export class TemplateDrivenComponent {
  name: any = "'<p>page-not-found works!</p>'";
  submitted: any = false;
  from!: NgForm;
  onSubmit(from: NgForm) {
    console.log(from);
    console.log(from.value);
    this.from = from.value;

    window.alert("You have submitted the form "+ `${this.from.value}` +"!");
    from.reset();
  }
}
