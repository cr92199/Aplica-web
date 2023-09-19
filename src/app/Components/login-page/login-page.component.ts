import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  
  /* email: string = '';
  password: string = ''; */
  
  constructor(private route: Router, private authServices: AuthService) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.route.navigate(['dash']);
    }
  }

  loginUser(value: any) {
    let {email, password} = value;
    this.authServices.login(email,password).subscribe(
      (data: any) => {
        console.log(data);
        if (data.token) {
          sessionStorage.setItem('token', data.token);
          this.route.navigate(['dash']);
        }
      },
      (error) => {
        console.log('ha ocurrido un error', error);
      },
      () => {
        console.log('proceso login realizado correctamente');
      }
    );
  }
}
