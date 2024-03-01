import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnInit,
} from "@angular/core";

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCardModule } from "@angular/material/card";
@Component({
  selector: "app-reactive-forms",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatSlideToggleModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: "./reactive-forms.component.html",
  styleUrl: "./reactive-forms.component.scss",
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow",
          fontWeight: "bold",
          border: "3px solid red",
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.1,
          backgroundColor: "blue",
          fontWeight: "bold",
        })
      ),
      transition("open => closed", [animate("1s")]),
      transition("closed => open", [animate("0.5s")]),
    ]),

    // animation triggers go here
  ],
})
export class ReactiveFormsComponent implements OnInit {
firstName: any;
  constructor(private formBuilder: FormBuilder, private ngZone: NgZone) {}
  ngOnInit(): void {}
  profileForm = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.formBuilder.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control("")]),
  });

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(""));
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.log(this.profileForm.valid);
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
