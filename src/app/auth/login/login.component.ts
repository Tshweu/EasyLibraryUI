import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButton,
    // NgxLoadingModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login_form : FormGroup;
  loading : boolean = false;
  constructor(private fb: FormBuilder,private user_service: UserService, private router: Router){
    this.login_form = this.fb.group({
      username: ['john2@gmail.com',[Validators.required, Validators.email]],
      password: ['johnJjones',[Validators.required]]
    });
  }

  login(): void {
    this.loading = true;
    if (this.login_form.valid) {
      this.user_service.login(this.login_form.value).subscribe({
        next: (res: any) => {
          this.loading = false;
          sessionStorage.setItem('token', res.jwtToken);
          this.router.navigate(['views/dashboard']);
        },
        error: (err: any) => {
          this.loading = false;
        },
      });
    }
  }
}
