import { Routes } from '@angular/router';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ExpensesformComponent } from './pages/expensesform/expensesform.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    // { path: "", redirectTo: 'Login', pathMatch: 'full' },
    { path: '', component: ExpensesComponent, canActivate: [] },
    { path: 'expense-form', component: ExpensesformComponent },
    { path: 'expense-form/:id', component: ExpensesformComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
