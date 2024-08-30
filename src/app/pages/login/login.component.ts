import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../models/user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup
  errorMessage: string | null = null
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.form = this.fb.group({
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })
  }

  login: User = {
    email: '',
    password: '',
    username: ''
  }

  onSubmit() {
    const rawForm = this.login
    this.login.email = this.form.value
    this.login.password = this.form.value


    this.auth.login(rawForm.email, rawForm.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        this.errorMessage = err
      }
    })
  }
}
