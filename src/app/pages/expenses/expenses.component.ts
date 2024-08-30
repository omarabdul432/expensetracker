import { Component, inject, OnInit } from '@angular/core';
import { ExpensecardComponent } from '../expensecard/expensecard.component';
import { RouterModule } from '@angular/router';
import { ExpenseserviceService } from '../../_services/expenseservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpensecardComponent, RouterModule, CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent implements OnInit {
  totalexpense: number = 0
  details: any


  detail = inject(ExpenseserviceService)

  ngOnInit(): void {
    this.detail.get().subscribe((res) => {
      this.details = res
      // this.totalexpense +=parseInt(this.details.price)
      console.log(res)
    })
  }

  // getTotal(){
  //  this.totalexpense = this.details.reduce((sum:number,expense:any)=>sum + expense.price,0)
  // }
}
