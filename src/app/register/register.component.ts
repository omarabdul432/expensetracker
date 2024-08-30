import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from "../pages/login/login.component";



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  form!: FormGroup
  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  register: User = {
    username: '',
    email: '',
    password: ''
  }
  errorMessage: string | null = null
  onSubmit() {
    const rawForm = this.register
    this.register.username = this.form.value.username
    this.register.email = this.form.value.email
    this.register.password = this.form.value.password

    // console.log(rawForm)

    this.authservice.register(rawForm.email, rawForm.username, rawForm.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/login')
      },
      error: (err) => {
        this.errorMessage = err
      }
    })
  }

}
