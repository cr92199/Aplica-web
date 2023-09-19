import { Component, OnInit ,Output , EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  @Output() loginAccion: EventEmitter<{}> = new EventEmitter();

  constructor(private formBuilder: FormBuilder,  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  //submit del formulario login
  submitLogin() {
    if (this.loginForm) {
      console.log(this.loginForm.value);

      this.loginAccion.emit(this.loginForm.value);
      //console.log(this.loginAccion);
      //TODO: peticio a auth service
      //this.loginForm.reset();
    }
  }
}
