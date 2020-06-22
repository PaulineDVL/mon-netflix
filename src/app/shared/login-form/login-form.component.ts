import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
  ]
})
export class LoginFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();

    // Declarations
    public formData: FormGroup;

    // Inject FormBuilder
    constructor(
      private FormBuilder: FormBuilder
    ) {}

    // Method to reset form
    private resetForm = ()  => {
      this.formData = this.FormBuilder.group({
        email: [ null, Validators.required ],
        password: [ null, Validators.required ],
      });
    };

    // Start
    ngOnInit() {
      this.resetForm();
    }

}
